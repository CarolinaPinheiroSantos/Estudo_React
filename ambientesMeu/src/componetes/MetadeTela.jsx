import sytles from './MetadeTela.module.css';

export function MetadeTela(){
    return(
        
        <div className={sytles.container}>
            <p>nome da escolinha</p>

            <div className={sytles.containerBotoes}>
                <button>Professor</button>
                <button>Disciplina</button>
                <button>Reserva</button>
                <button>Sala</button>
            </div>
        </div>

    );
}