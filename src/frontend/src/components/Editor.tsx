import React from "react";
import { useEditorTools } from "../context/EditorToolsContext";

const Editor: React.FC = () => {
  const { tool, color } = useEditorTools();

  // Usa tool e color per gestire il comportamento dell'editor
  // ...

  return (
    <div className="editor">
      <div id="pixel-canvas-container">
        <canvas id="pixel-canvas"></canvas>
      </div>
    </div>
  );
};

export default Editor;
