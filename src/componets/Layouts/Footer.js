import {FaFacebook, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer () {
    return (
        <footer className ={styles.footer}>
            <ul className= {styles.lists}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li className={styles.copy_right}>
                    <span>Project P</span> &copy; 2022
                </li>
            </ul>
        </footer>
    )
}
