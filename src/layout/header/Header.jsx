import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <nav>
                <div className={styles.logo}>
                    <h1>juststop<span className={styles.dot}>.</span>dev</h1>
                </div>
                <ul>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact" className={styles.linkButton}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;