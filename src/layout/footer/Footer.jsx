import styles from './Footer.module.scss';

function  Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <p className={styles.footerName}>juststop.dev</p>
                <p>contact@juststop.dev</p>
                <p>© JustStop__ 2023. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;