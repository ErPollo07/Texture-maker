/**
 * This React component renders a page for opening an existing Minecraft texture pack project.
 * 
 * - The user can click a button to open the system folder picker and select a project folder.
 * - The selected folder path is displayed to the user for confirmation.
 * - The "Open Project" button is enabled only when a folder is selected.
 * - If an invalid folder is selected, an error message is shown.
 * - This layout is designed for a fast and user-friendly experience.
 */

import React, { useState } from 'react';

const OpenProject: React.FC = () => {
  // State to store the selected folder path
  const [folderPath, setFolderPath] = useState<string | null>(null);
  // State to store any error messages
  const [error, setError] = useState<string | null>(null);

  // Handler for folder selection
  const handleChooseFolder = async () => {
    // In Electron, you would use the IPC renderer to open a dialog
    // Here we use a placeholder for demonstration
    // Replace this with your Electron dialog logic
    // Example: window.electronAPI.openFolder()
    try {
      // Simulate folder selection (replace with real implementation)
      const result = await window.electronAPI?.openFolder?.();
      if (result && result.filePaths && result.filePaths[0]) {
        setFolderPath(result.filePaths[0]);
        setError(null);
      } else {
        setError('No folder selected.');
      }
    } catch (e) {
      setError('An error occurred while selecting the folder.');
    }
  };

  // Handler for opening the project
  const handleOpenProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!folderPath) {
      setError('Please select a folder before opening the project.');
      return;
    }
    // TODO: Add logic to open the project with the selected folder
    // For now, just clear the error
    setError(null);
    // Example: window.electronAPI.openProject(folderPath)
  };

  return (
    <div>
      <h2>Open an existing project</h2>
      {/* Button to open the system folder picker */}
      <button type="button" onClick={handleChooseFolder}>
        Choose folder
      </button>
      {/* Show the selected folder path if available */}
      {folderPath && (
        <div>
          <strong>Selected folder:</strong> {folderPath}
        </div>
      )}
      {/* Show error message if any */}
      {error && (
        <div style={{ color: 'red' }}>
          {error}
        </div>
      )}
      {/* Button to confirm and open the project */}
      <form onSubmit={handleOpenProject}>
        <button type="submit" disabled={!folderPath}>
          Open Project
        </button>
      </form>
    </div>
  );
};


export default OpenProject;
