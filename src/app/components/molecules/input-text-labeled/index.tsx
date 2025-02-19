'use client'

import { ChangeEventHandler, useState } from "react";
import styles from "./style.module.css";

export const InputTextLabeled = () => {
  const [text, setText] = useState('')

  const onChange : ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <div className={styles.labelBox}>
        <label className={styles.label} htmlFor="Label">
          라벨
        </label>
      </div>
      <input className={styles.input} type="text" id="Label" onChange={onChange} value={text} />
      <div className={styles.view}>{`값1: ${text}`}</div>
    </div>
  );
};
