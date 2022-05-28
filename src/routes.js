import Cardapio from 'pages/cardapio'
import Inicio from 'pages/inicio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Menu from 'components/menu'
import styles from './Routes.module.scss'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <header className={styles.header}>
          <div className={styles.header__text}>A casa do código e da massa</div>
        </header>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </Router>
    </main>
  )
}
