'use client'

import { ChangeEventHandler, useState } from "react";

import styles from "./style.module.css";

export const DivContentEditable = () => {
    const [text, setText] = useState('')
  
    const onInput : ChangeEventHandler<HTMLDivElement> = (event) => {
      setText(event.currentTarget.innerText)
    }

  return (
    <div>
      <div aria-label="main" className={styles.input} contentEditable onInput={onInput}/>
      <div className={styles.view}>{`값3: ${text}`}</div>
    </div>
  );
};
