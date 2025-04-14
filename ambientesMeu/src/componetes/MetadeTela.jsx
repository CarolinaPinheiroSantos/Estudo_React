import sytles from './MetadeTela.module.css';

export function MetadeTela(){
    return(
        
        <div className={sytles.container}>
            <p className={sytles.titulo}>Bem vindo</p>

            <div className={sytles.containerBotoes}>
                <button className={sytles.botao}>Professor</button>
                <button className={sytles.botao}>Disciplina</button>
                <button className={sytles.botao}>Reserva</button>
                <button className={sytles.botao}>Sala</button>
            </div>
        </div>

    );
}