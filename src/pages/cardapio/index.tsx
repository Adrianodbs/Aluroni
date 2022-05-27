import styles from './Cardapio.module.scss';
import Buscador from './buscador';
import { useState } from 'react';
import Filtros from './filtros';
import Ordenador from './ordenador';
import Itens from './itens';
import React from 'react';
import Menu from 'components/menu';

export default function Cardapio (){
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] =useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador 
          busca={busca} 
          setBusca={setBusca}/>
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}