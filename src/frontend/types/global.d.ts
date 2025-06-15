// This file extends the Window interface to include the electronAPI object
// Make sure this file is included in your tsconfig.json "include" array

export {};

declare global {
  interface Window {
    electronAPI?: {
      openFolder?: () => Promise<any>;
      openProject?: (folderPath: string) => Promise<any>;
      // Add other exposed methods here if needed
    };
  }
}
