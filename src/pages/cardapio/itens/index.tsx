import cardapio from './itens.json'
import Item from './item'
import styles from './Itens.module.scss'
import { useEffect, useState } from 'react';

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens (props: Props){
  const [lista, setLista] = useState(cardapio)
  const {busca, filtro} = props

  function testaBusca (title: string){
    // Coloca o 'i' para o regex não ser case sensitive
    const regex = new RegExp (busca, 'i')
    return regex.test(title)
  }

  function testaFiltro (id: number){
    if(filtro !== null) return filtro === id;
    return true
  }

  useEffect(() =>{
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(novaLista)
  }, [busca, filtro])

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <div>
          <Item 
            key={item.id}
            {...item}
          />
        </div>
      ))}
    </div>
  )
}