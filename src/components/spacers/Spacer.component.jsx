import styles from './Spacer.module.scss';

function Spacer({ space }) {
    return (
        <div className={styles.spacer} style={{ marginTop: space }}></div>
    )
}

export default Spacer;