import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootContainer = document.getElementById("root") ;
const root = createRoot(rootContainer);

root.render(<App />);
