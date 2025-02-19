import styles from './styles.module.css'

export const Checkbox = () => {
    return (
        <div>
            <div className={styles.labelBox}>
                <input id='checkbox' type='checkbox' />
                <label htmlFor='checkbox' className={styles.label}>체크박스</label>
            </div>
            <div className={styles.view}>
                {`체크박스값: ${true ? '참' : '거짓'}`}
            </div>
        </div>
    )
}