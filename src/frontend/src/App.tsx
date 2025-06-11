// Questo file funge da layout principale dell'applicazione e include la navigazione tra le pagine.
import React from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavWrapper from './components/NavWrapper'

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* Bottoni di navigazione tra le pagine */}
      <NavWrapper />
      {/* Gestione delle rotte */}
      <AppRoutes />
    </HashRouter>
  )
}

export default App
