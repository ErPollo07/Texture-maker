import React from 'react';
import { useNavigate } from 'react-router-dom';

const Toolbar: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="toolbar">
      <input type="color" id="color-picker" />
      <button id="pencil-button">Pencil</button>
      <button id="eraser-button">Eraser</button>
      <button id="reset-button">Reset</button>
      <button id="save-button">Save</button>
      <input type="text" placeholder="File Name" id="file-name" />
      <button onClick={() => navigate('/open')} id="close-project-button">Close project</button>
    </div>
  );
}

export default Toolbar;
