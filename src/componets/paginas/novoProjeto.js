import styles from './novoProjeto.module.css'
import FormProjeto from '../Projeto/formProjeto'

export default function NovoProjeto(){
    return (
        <div className={styles.novoProjeto_container}>
            <h1>Criando um novo projeto</h1>
            <p>A partir de agora você irá criar um novo projeto para poder organizar o controlar o andamento.</p>
            <FormProjeto 
                botaoTexto="Criar Novo Projeto" />
        </div>
    )
}

