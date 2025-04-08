import styles from './Login.module.css'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


const loginSchema = z.object({
    email: z.string().email({message: 'isso n é email n, sai da live filha'}),
    senha: z.string().length(6, {message: 'É 6 caracteressss'})
})

export function Login(){

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})
    function autenicarUsuario(data){
        console.log(data.email)
        console.log(data.senha)
    }

    return(
        <div className={styles.container}>
            <p className={styles.titulo}>Login</p>

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

    )
}