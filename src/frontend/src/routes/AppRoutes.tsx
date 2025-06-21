// This file manages the main routes of the application.
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreateProject from '../pages/CreateProject';
import OpenProject from '../pages/OpenProject';
import EditorPage from '../pages/EditorPage';
import CanvasTest from '../test/CanvasTest';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/create" element={<CreateProject />} />
    <Route path="/open" element={<OpenProject />} />
    <Route path="/editor" element={<EditorPage />} />
    <Route path='/test' element={<CanvasTest />} />
    {/* Any other route redirects to /open */}
    <Route path="*" element={<Navigate to="/open" replace />} />
  </Routes>
);

export default AppRoutes;
