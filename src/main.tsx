import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "@/styles/index.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

createRoot(document.getElementById("root")!).render(<App />);
