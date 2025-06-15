import React, { createContext, useContext, useState } from 'react';

// Define the available tools as a TypeScript type
export type Tool = 'pencil' | 'eraser' | 'selection';

// Define the shape of the context: what values and functions it will provide
interface EditorToolsContextProps {
  tool: Tool; // The currently selected tool
  setTool: (tool: Tool) => void; // Function to change the tool
  color: string; // The currently selected color
  setColor: (color: string) => void; // Function to change the color
}

// Create the context with an initial value of undefined
const EditorToolsContext = createContext<EditorToolsContextProps | undefined>(undefined);

// This component will provide the context to its children
export const EditorToolsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State for the current tool, default is 'pencil'
  const [tool, setTool] = useState<Tool>('pencil');
  // State for the current color, default is black
  const [color, setColor] = useState<string>('#000000');

  // The provider makes tool, setTool, color, setColor available to all children
  return (
    <EditorToolsContext.Provider value={{ tool, setTool, color, setColor }}>
      {children}
    </EditorToolsContext.Provider>
  );
};

// Custom hook for easy access to the context in any component
export const useEditorTools = () => {
  // Get the context value
  const context = useContext(EditorToolsContext);
  // If used outside of the provider, throw an error
  if (!context) throw new Error('useEditorTools must be used within EditorToolsProvider');
  return context;
};
