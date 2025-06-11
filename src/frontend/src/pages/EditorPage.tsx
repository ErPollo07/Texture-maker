// This page serves as the editor for the selected project.
import React from 'react';
import Toolbar from '../components/Toolbar';
import Explorer from '../components/Explorer';
import Editor from '../components/Editor';

const EditorPage: React.FC = () => {
  return (
    <>
      <Toolbar />
      <div className="container" id="container">
        <Explorer />
        <Editor /> 
      </div>
    </>
  );
};

export default EditorPage;
