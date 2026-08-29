import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 16;
const PULSE_COUNT = 6;
const NODE_COLOR = "#1E293B"; // slate, not pure black — quiet on white
const EDGE_COLOR = "#CBD5E1"; // light neutral, structural not decorative
const SIGNAL_COLOR = "#3B82F6";
function buildGraph(count: number) {
  const clusters = [
    new THREE.Vector3(-2.4, 0.6, -1),
    new THREE.Vector3(2.6, -0.3, -2),
    new THREE.Vector3(0, -1.7, 0.6),
  ];
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const c = clusters[i % clusters.length];
    nodes.push(
      new THREE.Vector3(
        c.x + (Math.random() - 0.5) * 2.6,
        c.y + (Math.random() - 0.5) * 2.6,
        c.z + (Math.random() - 0.5) * 2.6,
      ),
    );
  }
  const edges: [number, number][] = [];
  nodes.forEach((n, i) => {
    const nearest = nodes
      .map((other, j) => ({ j, d: n.distanceTo(other) }))
      .filter((x) => x.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);
    nearest.forEach(({ j }) => {
      const key: [number, number] = i < j ? [i, j] : [j, i];
      if (!edges.some(([a, b]) => a === key[0] && b === key[1]))
        edges.push(key);
    });
  });
  return { nodes, edges };
}

function Nodes({
  nodes,
  startTime,
}: {
  nodes: THREE.Vector3[];
  startTime: number;
}) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(() => {
    const elapsed = performance.now() / 1000 - startTime;
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const delay = i * 0.06;
      const t = Math.min(1, Math.max(0, (elapsed - delay) / 0.5));
      const eased = 1 - Math.pow(1 - t, 3);
      mesh.scale.setScalar(eased);
    });
  });

  return (
    <>
      {nodes.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          ref={(el) => (refs.current[i] = el)}
          scale={0}
        >
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color={EDGE_COLOR} />
        </mesh>
      ))}
    </>
  );
}

function Edges({
  nodes,
  edges,
  startTime,
}: {
  nodes: THREE.Vector3[];
  edges: [number, number][];
  startTime: number;
}) {
  const materials = useRef<(THREE.LineBasicMaterial | null)[]>([]);

  useFrame(() => {
    const elapsed = performance.now() / 1000 - startTime;
    edges.forEach(([a, b], i) => {
      const mat = materials.current[i];
      if (!mat) return;
      const delay = Math.max(a, b) * 0.06 + 0.2;
      const t = Math.min(1, Math.max(0, (elapsed - delay) / 0.6));
      mat.opacity = t * 0.6;
    });
  });

  return (
    <>
      {edges.map(([a, b], i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodes[a],
          nodes[b],
        ]);
        return (
          <line key={i}>
            <primitive object={geometry} attach="geometry" />
            <lineBasicMaterial
              ref={(el) => (materials.current[i] = el)}
              color={EDGE_COLOR}
              transparent
              opacity={0}
            />
          </line>
        );
      })}
    </>
  );
}

function Pulses({
  nodes,
  edges,
  startTime,
}: {
  nodes: THREE.Vector3[];
  edges: [number, number][];
  startTime: number;
}) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const state = useRef(
    Array.from({ length: PULSE_COUNT }, () => ({
      edge: edges[Math.floor(Math.random() * edges.length)],
      progress: Math.random(),
      speed: 0.25 + Math.random() * 0.2,
    })),
  );

  useFrame((_, delta) => {
    const elapsed = performance.now() / 1000 - startTime;
    if (elapsed < 1.2) return; // wait for graph to assemble first

    state.current.forEach((p, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;
      p.progress += delta * p.speed;
      if (p.progress >= 1) {
        p.progress = 0;
        p.edge = edges[Math.floor(Math.random() * edges.length)];
      }
      const [a, b] = p.edge;
      mesh.position.lerpVectors(nodes[a], nodes[b], p.progress);
      const fade = Math.min(1, elapsed - 1.2);
      (mesh.material as THREE.MeshBasicMaterial).opacity = fade;
    });
  });

  return (
    <>
      {state.current.map((_, i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color={SIGNAL_COLOR} transparent opacity={0} />
        </mesh>
      ))}
    </>
  );
}

function Scene() {
  const { nodes, edges } = useMemo(() => buildGraph(NODE_COUNT), []);
  const groupRef = useRef<THREE.Group>(null);
  const startTime = useMemo(() => performance.now() / 1000, []);
  const target = useRef({ x: 0, y: 0 });
  const reducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    if (reducedMotion) return;
    const handler = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 0.4;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 0.2;
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, [reducedMotion]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!reducedMotion) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.y += (target.current.x - 0) * delta * 0.5;
      groupRef.current.rotation.x +=
        (target.current.y - groupRef.current.rotation.x) * delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Nodes nodes={nodes} startTime={startTime} />
      <Edges nodes={nodes} edges={edges} startTime={startTime} />
      {!reducedMotion && (
        <Pulses nodes={nodes} edges={edges} startTime={startTime} />
      )}
    </group>
  );
}

export function NetworkScene() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Scene />
    </Canvas>
  );
}
