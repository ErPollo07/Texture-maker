import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <button className="toolbar-button">Nuovo Progetto</button>
      <button className="toolbar-button">Apri Progetto</button>
      <button className="toolbar-button">Salva Progetto</button>
      <button className="toolbar-button">Carica Progetto</button>
      <button className="toolbar-button">Esporta Progetto</button>
    </div>
  );
}

export default Toolbar;
