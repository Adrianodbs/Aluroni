import Cardapio from 'pages/cardapio'
import Inicio from 'pages/inicio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Menu from 'components/menu'
import PaginaPadrao from 'components/pagina-padrao'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}
