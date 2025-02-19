'use client'

import { ChangeEventHandler, useState } from 'react'
import styles from './styles.module.css'

export const RadioButton = () => {
    const [fruit, setFruit] = useState('apple')

    const onChange :  ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value)
        setFruit(event.target.value)
    }

    return (
        <div>
            <div className={styles.labelBox}>
                <input id='apple' name='fruit' type='radio' onChange={onChange}/>
                <label htmlFor='apple' className={styles.label}>apple</label>
            </div>
            <div className={styles.labelBox}>
                <input id='banana' name='fruit' type='radio' />
                <label htmlFor='banana' className={styles.label}>banana</label>
            </div>
            <div className={styles.labelBox}>
                <input id='mango' name='fruit' type='radio' />
                <label htmlFor='mango' className={styles.label}>mango</label>
            </div>
            <div className={styles.view}>
                {`체크박스값: ${fruit}`}
            </div>
        </div>
    )
}