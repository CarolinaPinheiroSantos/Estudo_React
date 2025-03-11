import style from './Fundamentos.module.css'
import {Botao} from '../componetes/Botao'

export function Fundamentos(){

    const mensagem = (texto) => alert(`AEEEEEEEEEEEEEEEEEEEEEE: ${texto}`)


    return(
        <div className= {style.conteiner}> {/*quando colocar a class no return colocar {}*/}
            <h1 className= {style.titulo}>Fundamentos</h1>

            <Botao 
                titulo='ok' 
                acao={ () => mensagem('reiniciando o computador')}
            />

        </div>    
    )
}

