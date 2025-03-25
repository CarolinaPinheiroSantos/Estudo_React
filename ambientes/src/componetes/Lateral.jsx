import styles from './Lateral.module.css'
import { PiStudentLight } from "react-icons/pi";

export function Lateral(){
    return(
        <aside className={styles.container}>
            <head>
                <img 
                    className={styles.imagemCabecalho} 
                    src={'https://images.unsplash.com/photo-1741686358778-70b1dbcbe4df?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />

                <div className={styles.containerUsuario}>
                    <img 
                        className={styles.fotoUsuario}
                        src= {'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/11/04/2068666766-hamsters.jpg'}    
                    />
                    <p className={styles.nomeUsuario}>usuario</p>
                </div>
            </head>

            <select className={estilos.containerBotao}>
                
                <div 
                    className={estilos.botao}>
                    <PiStudentLight className={estilos.icone}/> Professor</div>
                
                <div className={estilos.botao}>Disciplina</div>

                <div className={estilos.botao}>Ambiente</div>

                <div className={estilos.botao}>Agendamento</div>

            </select>
        </aside>
    )
};