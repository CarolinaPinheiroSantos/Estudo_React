import styles from './Sala.module.css'
import { MetadeTela } from '../componetes/MetadeTela'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({
    descricao: z.string().min(2, {message: 'A descrição deve conter no mínimo 2 caracteres.'})
                         .max(80, {message: 'A descrição deve conter no máximo 80 caracteres.'}),
    localizacao: z.string().min(2, {message: 'A localização deve conter no mínimo 2 caracteres.'})
                           .max(40, {message: 'A localização deve conter no máximo 80 caracteres.'})
})

export function Sala() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })

    function autenticarSala(data) {
        console.log(data)
    }

    return (
        <div className={styles.containerGeral}>
            <div className={styles.container1}>
                <MetadeTela />
            </div>

            <div className={styles.container2}>
                <div className={styles.containerLogin}>
                    <p className={styles.titulo}>Reservar <strong>Sala</strong></p>

                    <form
                        onSubmit={handleSubmit(autenticarSala)}
                        className={styles.formulario}
                    >
                        <input 
                        {...register('descricao')}
                        placeholder='Descrição'
                        className={styles.campo}
                        />
                        { errors.descricao && (
                            <p className={styles.mensagem}>
                                {errors.descricao.message}
                            </p>
                        )}

                        <input 
                            {...register('localizacao')}
                            placeholder='Localização'
                            className={styles.campo}
                        />
                        { errors.localizacao && (
                            <p className={styles.mensagem}>
                                {errors.localizacao.message}
                            </p>
                        )}


                        <button className={styles.botao}>Confimar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
