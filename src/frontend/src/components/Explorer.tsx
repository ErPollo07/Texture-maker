import React from "react";
import css from "../css/Explorer.module.css";

// Example folder structure (replace with your JSON data)
const folderStructure = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "textures",
      type: "folder",
      children: [
        {
          name: "blocks",
          type: "folder",
          children: [
            { name: "stone.png", type: "file" },
            { name: "dirt.png", type: "file" }
          ]
        }
      ]
    },
    { name: "pack.mcmeta", type: "file" }
  ]
};

const Explorer: React.FC = () => {
  return (
    <div className={css.explorer}>
      {/* Header with root name and action buttons */}
      <div className={css["explorer-header"]}>
        <span className={css["explorer-root-name"]}>{folderStructure.name}</span>
        <div className={css["explorer-actions"]}>
          {/* Add file */}
          <button title="Add file">
            <span>📄</span>
          </button>
          {/* Add folder */}
          <button title="Add folder">
            <span>📁</span>
          </button>
          {/* Refresh */}
          <button title="Refresh">
            <span>🔄</span>
          </button>
          {/* Collapse all */}
          <button title="Collapse all">
            <span>➖</span>
          </button>
        </div>
      </div>
      {/* Folder tree placeholder */}
      <div className={css["explorer-tree"]}>
        {/* Qui verrà renderizzata la struttura delle cartelle */}
      </div>
    </div>
  );
};

export default Explorer;
