import { createRoot } from "react-dom/client";
import { App } from "./App";
import dotenv from "dotenv";
dotenv.config();

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
