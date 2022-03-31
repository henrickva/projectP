import{ Link } from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../Imagens/projetoReact.png'

export default function Navbar (){
    return (
    
    <nav className={styles.navbar}>
    <Container >
        <Link to="/">
            <img className={styles.imagem} src ={logo} alt='bussines' />
        </Link>
        <ul className={styles.list}> 
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li className={styles.item}>
                <Link to="/projetos">Projetos</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contato">Contato</Link>
            </li>   
        </ul>
    </Container>   
    </nav>
    )
}

