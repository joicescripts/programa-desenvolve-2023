import React from "react";
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';


type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
    function selecionarFiltro(opcao: IOpcao){
        if(filtro===opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    }
    return (
        <div className={styles.filtros}>
          {filtros.map(opcao => (
            <button className={classNames({
              [styles.filtros__filtro]: true,
              [styles['filtros__filtro--ativo']]: filtro === opcao.id
            })} 
            key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
              {opcao.label}
            </button>
          ))}
        </div>
      )
    }