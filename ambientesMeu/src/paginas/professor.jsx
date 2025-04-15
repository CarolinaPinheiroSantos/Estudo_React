import styles from './Professor.module.css'
import { MetadeTela } from '../componetes/MetadeTela'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const loginSchema = z.object({
    ni : z.string() .max(9, { message: 'No máximo 9 números' }) .regex(/^\d+$/, { message: 'Somente números são permitidos' }),
    nome: z.string({message: 'Somente letras'}) .min(1, {message: 'O nome deve conter no mínimo 1 caracter.'}).max(80, {message: 'O nome deve conter no máximo 80 caracteres.'}),
    email: z.string().email({message: 'Isto não é um email'}),
    senha: z.string().length(6, {message: 'Senha no minino 6 caracteres'}),
    telefone: z.string() .length(6, {message: 'Numero de telefone tem no minimo 11 numeros com ddd'}) .regex(/^\(\d{2}\) \d{5}-\d{4}$/, {message: 'Formato de telefone inválido',}),
    dataNascimento: z.string({message: 'Data inválida',}).refine((nascimento) => { let data_nascimento = new Date(nascimento)
                                                                return data_nascimento <= new Date()}, 'A data não pode ser no futuro.'),
    dataContratacao: z.string().length(10, {message: 'A data de contratação deve ser informada.'}),
    disciplinas: z.string().min(1, {message: 'O campo não deve ficar vazio.'})
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
                <div className={styles.containerLogin}>
                    <p className={styles.titulo}>Cadastrar <strong>Professor</strong></p>

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
                            {...register('dataNascimento')}
                            placeholder="Data de nascimento" 
                            className={styles.campo}
                        />
                        {errors.dataNascimento && (<p className={styles.mensagem}>{errors.dataNascimento.message}</p>)}
                        
                        <input 
                            {...register('dataContratacao')}
                            className={styles.campo}
                            type='date'
                        />
                        { errors.dataContratacao && (
                            <p className={styles.mensagem}>
                                {errors.dataContratacao.message}
                            </p>
                        )}


                        <input 
                            {...register('disciplinas')}
                            className={styles.campo}
                            placeholder='Disciplinas'
                        />
                        { errors.disciplinas && (
                            <p className={styles.mensagem}>
                                {errors.disciplinas.message}
                            </p>
                        )}

                        <button 
                            className={styles.botao} 
                        >Entrar</button>
                    </form>
                </div>
            </div>

        </div>

    )
}