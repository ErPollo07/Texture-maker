import React from "react";

const Editor: React.FC = () => {
  return (
    <div className="explorer">
      <div id="explorer-header">
        <div id="pack-name"></div>
        <button id="delete-button">
          <img src="../assets/icons/delete-file.svg" alt="Delete" />
        </button>
      </div>
      <div id="folder-tree"></div>
      <div className="refresh-container">
        <button id="render-button">REFRESH</button>
      </div>
    </div>
  );
};

export default Editor;
