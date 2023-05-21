import React from "react";
import { createRoot } from "react-dom/client";

function App(){
  return (
    <div>
      This is the Popup.html.
    </div>
  )
}

const rootContainer: any = document.getElementById("root") as HTMLElement;
const root: any = createRoot(rootContainer);
root.render(<App />);
