import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MyContextProvider } from "./context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
