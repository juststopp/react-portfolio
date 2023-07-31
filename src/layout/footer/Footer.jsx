import styles from './Footer.module.scss';

function  Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.leftFooter}>
                    <p className={styles.footerName}>juststop.dev</p>
                    <p>contact@juststop.dev</p>
                    <p>© JustStop__ 2023. All rights reserved.</p>
                </div>
                <div className={styles.rightFooter}>
                    <p>Inspiration: <br /><a href="https://en-zo.dev">en-zo.dev</a>
                    <br />
                    <a href="https://stacksorted.com/">https://stacksorted.com/</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;