'use client'

import { ChangeEventHandler, useState } from "react";
import styles from "./style.module.css";

export const InputTextPlaceHolder = () => {
  const [text, setText] = useState('')

  const onChange : ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        id="label"
        placeholder="값을 입력해주세요"
        value={text}
        onChange={onChange}
      />
      <div className={styles.view}>{`값2: ${text}`}</div>
    </div>
  );
};
