import estilos from './Rodape.module.css'

export function Rodape(){
    return(
        <footer className={estilos.conteiner}>
            <p className={estilos.texto}>2DS - Bosch</p>
        </footer>
    )
}