import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditorTools } from '../context/EditorToolsContext';

// This component displays the toolbar with all the main image editing tools
const Toolbar: React.FC = () => {
  const navigate = useNavigate();
  const { tool, setTool, color, setColor } = useEditorTools();

  // Handler stubs for each tool (to be implemented)
  const handlePencil = () => setTool('pencil');
  const handleEraser = () => setTool('eraser');
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value);
  const handleSelection = () => setTool('selection');

  return (
    <div className="toolbar">
      {/* Color picker (palette) */}
      <input
        type="color"
        id="color-picker"
        title="Choose color"
        onChange={handleColorChange}
      />
      {/* Pencil tool */}
      <button id="pencil-button" title="Pencil" onClick={handlePencil}>
        Pencil
      </button>
      {/* Eraser tool */}
      <button id="eraser-button" title="Eraser" onClick={handleEraser}>
        Eraser
      </button>
      {/* Selection tool */}
      <button id="selection-button" title="Selection" onClick={handleSelection}>
        Selection
      </button>
      <button id="reset-button">Reset</button>
      <button id="save-button">Save</button>
      <input type="text" placeholder="File Name" id="file-name" />
      <button onClick={() => navigate('/open')} id="close-project-button">Close project</button>
    </div>
  );
}

export default Toolbar;
