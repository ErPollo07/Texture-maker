import React from "react";

const Editor: React.FC = () => {
  return (
    <div className="editor">
      <div id="pixel-canvas-container">
        <canvas id="pixel-canvas"></canvas>
      </div>
    </div>
  );
};

export default Editor;
