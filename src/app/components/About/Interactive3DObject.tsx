import { useRef, useState, useEffect } from "react";
import type { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float, OrbitControls } from "@react-three/drei";

const RotatingShape = () => {
  const meshRef = useRef<Mesh | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2);
      setMouseY((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      // Magnetic mouse interaction
      meshRef.current.rotation.x += mouseY * 0.02;
      meshRef.current.rotation.y += mouseX * 0.02;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Icosahedron ref={meshRef} args={[2, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.8}
          emissive="#1E3A8A"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  );
};

export function Interactive3DObject() {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#3B82F6"
        />
        <RotatingShape />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
