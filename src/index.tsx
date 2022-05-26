import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/cardapio';
import Inicio from 'pages/inicio';

const componenteAtual = window.location.pathname === '/' ? <Inicio /> : <Cardapio />


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Inicio/>
  </React.StrictMode>
);

