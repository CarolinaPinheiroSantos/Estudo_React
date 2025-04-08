import styles from './Professor.module.css'
import { MetadeTela } from '../componetes/MetadeTela'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'



const loginSchema = z.object({
    ni : z.string() .max(9, { message: 'No máximo 9 números' }) .regex(/^\d+$/, { message: 'Somente números são permitidos' }),
    nome: z.string({message: 'Somente letras'}),
    email: z.string().email({message: 'Isto não é um email'}),
    senha: z.string().length(6, {message: 'É 6 caracteressss'}),
    telefone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, {message: 'Formato de telefone inválido',}),
    dataNascimento: z.string({message: 'Data inválida',})
})

export function Professor(){

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})
    function autenicarProfessor(data){
        console.log(data.email)
        console.log(data.senha)
    }
    return(
        <div className={styles.containerGeral}>

            <div className={styles.container1}>
                <MetadeTela/>
            </div>
            
            <div className={styles.container2}>
                <div className={styles.containerble}>
                    <p className={styles.titulo}>Login Professor</p>

                    <form 
                        onSubmit={handleSubmit(autenicarProfessor)}
                        className={styles.formulario}
                    >
                        <input 
                            {...register('NI')}
                            placeholder="NI" 
                            className={styles.campo}
                        />
                        {errors.ni && (<p className={styles.mensagem}>{errors.ni.message}</p>)}

                        <input 
                            {...register('nome')}
                            placeholder="Nome" 
                            className={styles.campo}
                        />
                        {errors.nome && (<p className={styles.mensagem}>{errors.nome.message}</p>)}

                        <input 
                            {...register('email')}
                            placeholder="E-mail" 
                            className={styles.campo}
                        />
                        {errors.email && (<p className={styles.mensagem}>{errors.email.message}</p>)}

                        <input 
                            type="tel"
                            {...register('telefone')}
                            placeholder="Telefone" 
                            className={styles.campo}
                        />
                        {errors.telefone && (<p className={styles.telefone}>{errors.email.telefone}</p>)}


                        <input 
                            type="date"
                            {...register('dataNascimento')}
                            placeholder="Data de nascimento" 
                            className={styles.campo}
                        />
                        {errors.dataNascimento && (<p className={styles.mensagem}>{errors.dataNascimento.message}</p>)}
                        
                        <button className={styles.botao} >Entrar</button>
                    </form>
                </div>
            </div>

        </div>

    )
}