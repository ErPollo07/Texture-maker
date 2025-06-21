// This component displays the buttons to navigate between the main pages.
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavButtons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={() => navigate('/open')} style={{ marginLeft: 10 }}>Open project</button>
      <button onClick={() => navigate('/create')} style={{ marginLeft: 10 }}>Create project</button>
      <button onClick={() => navigate('/editor')} style={{ marginLeft: 10 }}>Edit project</button>
      <button onClick={() => navigate('/test')} style={{ marginLeft: 10 }}>test</button>
    </div>
  );
};

export default NavButtons;
