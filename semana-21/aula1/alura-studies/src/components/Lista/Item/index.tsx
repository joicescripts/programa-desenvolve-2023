import { ITarefa } from "../../../types/tarefa"
import style  from "../Item/Item.module.scss"

interface Props extends ITarefa{
    selecionaTarefa:(tarefaSelecionada:ITarefa) => void
}

export default function Item(
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id,
        selecionaTarefa 
    }: Props) {
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}` }
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}
        >
                        <h3> {tarefa} </h3>
                        <span> {tempo} </span>
                        {completado && <span className={style.concluido} aria-label="tarefacompletada"></span>}
                    </li>
    )
}
