import estilos from './Inicial.module.css'
import {Cabecalho} from '../componetes/Cabecalho'
import {Lateral} from '../componetes/Lateral'
import {Principal} from '../componetes/Principal'
import {Rodape} from '../componetes/Rodape'

export function Inicial(){
    return(
        <div className={estilos.gridContainer}>

            <Cabecalho/>
            <Lateral/>
            <Principal/>
            <Rodape/>

        </div>
    )
}