import styles from './Botao.module.css'

export function Botao({titulo, acao}){
    
    // function mensagem(){
    //     alert('AEEEEEEEEEEEEEEEEEEEEEE')
    // }   

    return(
        <div 
            className={styles.conteiner} 
            onClick={acao}
        >

            <p className={styles.texto}> {titulo} </p>
        </div>
    )
}