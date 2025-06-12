/**
 * This React component renders a page for creating a new Minecraft texture pack project.
 * 
 * - It provides a form where the user can enter the project name and select the Minecraft version.
 * - The project name is managed with the `projectName` state variable, updated as the user types.
 * - The Minecraft version is managed with the `version` state variable, updated when the user selects a different option from the dropdown.
 * - When the user clicks the "Crea progetto" button, the form would be submitted (currently, no submit handler is implemented).
 * - All form elements are controlled components, meaning their values are tied to React state.
 */

import React, { useState } from 'react';

const CreateProject: React.FC = () => {
  // State for the project name input field
  const [projectName, setProjectName] = useState('');
  // State for the selected Minecraft version
  const [version, setVersion] = useState('1.8.9');

  return (
    <div>
      <h2>Crea un nuovo progetto</h2>
      {/* Form for creating a new project */}
      <form>
        <div>
          {/* Input for the project name */}
          <label htmlFor="projectName">Nome progetto:</label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={e => setProjectName(e.target.value)} // Update projectName state on change
            placeholder="Inserisci il nome del progetto"
          />
        </div>
        <div>
          {/* Dropdown for selecting the Minecraft version */}
          <label htmlFor="version">Versione Minecraft:</label>
          <select
            id="version"
            value={version}
            onChange={e => setVersion(e.target.value)} // Update version state on change
          >
            <option value="1.8.9">1.8.9</option>
            <option value="1.12.2">1.12.2</option>
            <option value="1.16.5">1.16.5</option>
            <option value="1.18.2">1.18.2</option>
            <option value="1.20.1">1.20.1</option>
          </select>
        </div>
        {/* Button to submit the form and create the project */}
        <button type="submit">Crea progetto</button>
      </form>
    </div>
  );
};

export default CreateProject;
