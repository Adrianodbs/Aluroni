import Cardapio from 'pages/cardapio'
import Inicio from 'pages/inicio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Menu from 'components/menu'

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  )
}
