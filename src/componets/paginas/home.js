import styles from './home.module.css'
import BotaoHome from '../Layouts/BotaoHome'
import logoHome from '../Imagens/logoHome.png'

export default function home() {
    return (
        <section className ={styles.home_container}>
            <h1>Seja bem-vindo ao Project P</h1>
            <p>A melhor maneira de organizar e gerenciar seus novos projetos</p>
            <BotaoHome to="/novoProjeto" text ="Criar Projeto"/>
            <img src={logoHome} alt="Project P" />
        </section>
    )
}
