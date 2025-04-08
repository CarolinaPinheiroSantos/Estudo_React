import estilos from './Cabecalho.module.css'

export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <p className={estilos.titulo}>Controle de ambientes</p>
        </header>
    )
}
