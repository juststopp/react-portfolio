import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({ name, link, width, padding }) {
    return (
        <Link to={link} className={styles.button_link} style={{ width: width, padding: padding }}>
            {name}
        </Link>
    )
}

export default Button;