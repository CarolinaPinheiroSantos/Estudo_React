import sytles from './MetadeTela.module.css';
import { useNavigate } from 'react-router-dom';

export function MetadeTela(){
    
    const navigate = useNavigate()
    
    return(
        
        <div className={sytles.container}>
            <p className={sytles.titulo}>Bem vindo</p>

            <div className={sytles.containerBotoes}>
                <button 
                    className={sytles.botao}
                    onClick={() => navigate('/')}
                >Professor</button>

                <button 
                    className={sytles.botao}
                    onClick={() => navigate('/disciplina')}      
                >Disciplina</button>

                <button 
                    className={sytles.botao}
                    onClick={() => navigate('/reservaAmbiente')}
                >Reserva</button>

                <button 
                    className={sytles.botao}
                    onClick={() => navigate('/sala')}
                >Sala</button>
            </div>
        </div>

    );
}