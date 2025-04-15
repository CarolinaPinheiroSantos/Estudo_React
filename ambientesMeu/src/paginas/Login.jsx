import styles from './Login.module.css'
import { MetadeTela } from '../componetes/MetadeTela'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'



const loginSchema = z.object({
    email: z.string().email({message: 'Esse email não é valido'}),
    senha: z.string().length(6, {message: 'Senha no minino 6 caracteres'})
})

export function Login(){

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})
    function autenicarUsuario(data){
        console.log(data.email)
        console.log(data.senha)
    }

    return(
     <div className={styles.containerGeral}>

            <div className={styles.container1}>
                <MetadeTela/>
            </div>
            
            <div className={styles.container2}>
                <div className={styles.containerLogin}>
                    <p className={styles.titulo}><strong>Login</strong></p>        

                    <form 
                        onSubmit={handleSubmit(autenicarUsuario)}
                        className={styles.formulario}
                    >
                        <input 
                            {...register('email')}
                            placeholder="E-mail" 
                            className={styles.campo}
                        />
                        {errors.email && (<p className={styles.mensagem}>{errors.email.message}</p>)}

                        <input 
                            {...register('senha')}
                            placeholder="Senha" 
                            className={styles.campo}
                        />
                        {errors.senha && (<p className={styles.mensagem}>{errors.senha.message}</p>)}

                        <button  
                            className={styles.botao}
                        >Entrar</button>

                    </form>
                </div>
            </div>

        </div>

    )
}