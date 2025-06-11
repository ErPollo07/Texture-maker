// Questo file funge da layout principale dell'applicazione e include la navigazione tra le pagine.
import React from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavButtons from './components/NavButtons'

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* Bottoni di navigazione tra le pagine */}
      <NavButtons />
      {/* Gestione delle rotte */}
      <AppRoutes />
    </HashRouter>
  )
}

export default App
