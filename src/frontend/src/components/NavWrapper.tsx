import React from 'react'
import { HashRouter, useLocation } from 'react-router-dom'
import NavButtons from './NavButtons'

const NavWrapper: React.FC = () => {
  const location = useLocation();
  // Cambia '/editor' con il path effettivo della tua EditorPage
  const hideNav = location.pathname === '/editor';
  return !hideNav ? <NavButtons /> : null
}

export default NavWrapper;
