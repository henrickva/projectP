import { useEffect, useState } from 'react'
import styles from './formProjeto.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import Submit from '../Form/Submit'

export default function FormProjeto({handleSubmit, botaoTexto, projectData}){
    const [categoria, setCategoria] = useState([])
    const [project, setProject] =useState(projectData || {}) 
    
    useEffect(()=>{  fetch("http://localhost:5000/categoria", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) =>{
            setCategoria(data)
        })
        .catch((err) => console.log(err)) 

    },[])
       
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject ({...project, [e.target.name]:e.target.value})
    }

    function handleCategoria(e) {
        setProject ({...project, 
            categoria:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
        })
    }

    return(
        <form onSubmit={submit} className={styles.form}> 
            <Input 
                type="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira aqui o nome do seu Projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name: ''} />

            <Input 
                type="number"
                text="Orçamento Disponível"
                name="orçamento"
                placeholder="Insira o valor do orçamento disponivel"
                handleOnChange={handleChange} 
               />

            <Select 
                name="id_categoria"
                text="Selecione sua categoria"
                options={categoria}
                handleOnChange={handleCategoria}
                value={project.categoria ? project.categoria.id: ''}/>
            
            <Submit
                text={botaoTexto}
            />
        </form>        
        
    )
}