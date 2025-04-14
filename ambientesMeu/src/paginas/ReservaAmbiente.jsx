import styles from './ReservaAmbiente.module.css'
import { MetadeTela } from '../componetes/MetadeTela'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
    dataInicio: z.string().length(10, {message: 'A data de início deve ser informada.'}),
    dataTermino: z.string().length(10, {message: 'A data de término deve ser informada.'}),
    periodo: z.string().min(1, {message: 'O campo não deve ficar vazio.'}),
    sala: z.string().min(1, {message: 'A sala deve ser informada.'}),
    professor: z.string().min(1, {message: 'O professor deve ser informado.'}),
    disciplina: z.string().min(1, {message: 'A disciplina deve ser informada.'}),
})

export function ReservaAmbiente() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })

    function autenticarReserva(data) {
        console.log(data)
    }

    return (
        <div className={styles.containerGeral}>
            <div className={styles.container1}>
                <MetadeTela />
            </div>

            <div className={styles.container2}>
                <div className={styles.containerLogin}>
                    <p className={styles.titulo}>Cadastrar <strong>Reserva de Ambiente</strong></p>

                    <form
                        onSubmit={handleSubmit(autenticarReserva)}
                        className={styles.formulario}
                    >
                        <input 
                    {...register('dataInicio')}
                    className={styles.campo}
                    type='date'
                    />
                    { errors.dataInicio && (
                        <p className={styles.mensagem}>
                            {errors.dataInicio.message}
                        </p>
                    )}


                    <input 
                        {...register('dataTermino')}
                        className={styles.campo}
                        type='date'
                    />
                    { errors.dataTermino && (
                        <p className={styles.mensagem}>
                            {errors.dataTermino.message}
                        </p>
                    )}


                    <input 
                        {...register('periodo')}
                        placeholder='Período'
                        className={styles.campo}
                    />
                    { errors.periodo && (
                        <p className={styles.mensagem}>
                            {errors.periodo.message}
                        </p>
                    )}

                    <input 
                        {...register('sala')}
                        placeholder='Sala'
                        className={styles.campo}
                    />
                    { errors.sala && (
                        <p className={styles.mensagem}>
                            {errors.sala.message}
                        </p>
                    )}


                    <input 
                        {...register('professor')}
                        className={styles.campo}
                        placeholder='Professor'
                    />
                    { errors.professor && (
                        <p className={styles.mensagem}>
                            {errors.professor.message}
                        </p>
                    )}


                    <input 
                        {...register('disciplina')}
                        className={styles.campo}
                        placeholder='Disciplina'
                    />
                    { errors.disciplina && (
                        <p className={styles.mensagem}>
                            {errors.disciplina.message}
                        </p>
                    )}

                        <button className={styles.botao}>Reservar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
