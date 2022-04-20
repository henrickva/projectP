import styles from './formProjeto.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import Submit from '../Form/Submit'

export default function formProjeto({botaoTexto}){
    return(
        <form className={styles.form}> 
            <Input 
                type="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira aqui o nome do seu Projeto" />

            <Input 
                type="number"
                text="Orçamento Disponível"
                name="orçamento"
                placeholder="Insira o valor do orçamento disponivel" />

            <Select 
                name="id_categoria"
                text="Selecione sua categoria"
                />
            
            <Submit
                text={botaoTexto}
            />
        </form>        
        
    )
}