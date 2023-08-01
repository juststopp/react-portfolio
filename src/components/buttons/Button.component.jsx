import styles from './Button.module.scss';

function Button({ name, link, width, padding }) {
    return (
        <a href={link} className={styles.button_link} style={{ width: width, padding: padding }}>
            {name}
        </a>
    )
}

export default Button;