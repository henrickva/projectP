import styles from './Submit.module.css'


export default function Submit ({ text }){
    return (
        <div className={styles.botao_centro}>
           <button className={styles.botao}>{text}</button>
        </div>
    )
}