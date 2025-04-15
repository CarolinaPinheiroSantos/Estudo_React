import estilos from './Lateral.module.css'
import { PiStudentBold } from 'react-icons/pi'
import { FaPencilAlt, FaCalendarAlt } from 'react-icons/fa'
import { SiGoogleclassroom } from 'react-icons/si'

import foto from '../assets/usuario.png'

export function Lateral(){
    return(
        <aside className={estilos.conteiner}>
            <header>
                <img 
                    className={estilos.imagemCabecalho} 
                    src={'https://images.unsplash.com/photo-1566305977571-5666677c6e98?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
                <div className={estilos.conteinerUsuario}>
                    <img 
                        className={estilos.fotoUsuario} 
                        src={foto}                        
                    />
                    <p className={estilos.nomeUsuario}>Usuário</p>
                </div>
            </header>

            <section className={estilos.conteinerBotoes}>

                <div className={estilos.botao} >
                    <PiStudentBold className={estilos.icone}/>
                    Professor
                </div>

                <div className={estilos.botao}>
                    <FaPencilAlt className={estilos.icone} />
                    Disciplina
                </div>

                <div className={estilos.botao}>
                    <SiGoogleclassroom className={estilos.icone} />
                    Ambiente
                </div>
                
                <div className={estilos.botao}>
                    <FaCalendarAlt className={estilos.icone} />
                    Agendamento
                </div>
            </section>

        </aside>
    )
}
