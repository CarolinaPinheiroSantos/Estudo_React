import styles from './Disciplina.module.css'
import { MetadeTela } from '../componetes/MetadeTela'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({  

    nome: z.string().min(2, {message: 'O nome deve conter no mínimo 2 caracteres.'})
                    .max(80, {message: 'O nome deve conter no máximo 80 caracteres.'}),
    curso: z.string().min(2, {message: 'O nome deve conter no mínimo 2 caracteres.'})
                     .max(100, {message: 'O nome deve conter no máximo 100 caracteres.'}),
    cargaHoraria: z.string().min(1, {message: 'A carga deve ter no minimo um numero'}),
    descricao: z.string().min(1, {message: 'O campo não deve ficar vazio.'}),                
    responsavel: z.string().min(1, {message: 'O campo não deve ficar vazio.'})
})

export function Disciplina() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })

    function autenticarDisciplina(data) {
        console.log(data.email)
        console.log(data.senha)
    }

    return (
        <div className={styles.containerGeral}>
            <div className={styles.container1}>
                <MetadeTela />
            </div>

            <div className={styles.container2}>
                <div className={styles.containerLogin}>
                    <p className={styles.titulo}>Cadastrar <strong>Disciplina</strong></p>

                    <form
                        onSubmit={handleSubmit(autenticarDisciplina)}
                        className={styles.formulario}
                    >
                        <input 
                        {...register('nome')}
                        placeholder='Nome'
                        className={styles.campo}
                        />
                        { errors.nome && (
                            <p className={styles.mensagem}>
                                {errors.nome.message}
                            </p>
                        )}

                        <input 
                            {...register('curso')}
                            placeholder='Curso'
                            className={styles.campo}
                        />
                        { errors.curso && (
                            <p className={styles.mensagem}>
                                {errors.curso.message}
                            </p>
                        )}


                        <input 
                            {...register('cargaHoraria')}
                            placeholder='Carga horária'
                            className={styles.campo}
                            
                        />
                        { errors.cargaHoraria && (
                            <p className={styles.mensagem}>
                                {errors.cargaHoraria.message}
                            </p>
                        )}


                        <input 
                            {...register('descricao')}
                            className={styles.campo}
                            placeholder='Descrição'
                        />
                        { errors.descricao && (
                            <p className={styles.mensagem}>
                                {errors.descricao.message}
                            </p>
                        )}


                        <input 
                            {...register('responsavel')}
                            className={styles.campo}
                            placeholder='Responsável'
                        />
                        { errors.responsavel && (
                            <p className={styles.mensagem}>
                                {errors.responsavel.message}
                            </p>
                        )}

                        <button className={styles.botao}>Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
