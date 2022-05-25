import styles from './novoProjeto.module.css'
import FormProjeto from '../Projeto/formProjeto'
import { useNavigate } from 'react-router-dom'

export default function NovoProjeto(){
    const history = useNavigate()

    function createPost(project){

       // inciando custos e serviços

       project.cost=0
       project.services=[]

       fetch("http://localhost:5000/projects",{
        method:"Post",
        headers: {
            'Content-type': "application/json",
        },
        body: JSON.stringify(project)
       }).then((resp)=> resp.json())
       .then((data)=>{
           console.log(data)
           //redirect
           history('/projetos', {message: 'Projeto criado com sucesso!!!'})
       })
       .catch(err=> console.log(err))

    }

    return (
        <div className={styles.novoProjeto_container}>
            <h1>Criando um novo projeto</h1>
            <p>A partir de agora você irá criar um novo projeto para poder organizar o controlar o andamento.</p>
            <FormProjeto handleSubmit={createPost} botaoTexto="Criar Novo Projeto" />
        </div>
    )
}

