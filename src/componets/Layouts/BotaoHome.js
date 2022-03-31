import { Link } from 'react-router-dom'
import styles from './BotaoHome.module.css'


export default function botaoHome ({to, text}){
    return (
        <Link className={styles.botao}to = {to}>
        {text}
        </Link>
    )
}
 