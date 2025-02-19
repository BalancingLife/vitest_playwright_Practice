"use client";
import { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  className?: string;
}

const init = 0;

export const Counter = (props: Props) => {
  const [count, setCount] = useState(init);

  const onClickPlus = () => {
    setCount(count + 1);
    console.log("clicked");
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };
  const onClickReset = () => {
    setCount(init);
  };

  return (
    <div className={props.className}>
      <div className={styles.counter}>카운터 : {count}</div>
      <div>
        <button onClick={onClickPlus} className={styles.button}>
          +1
        </button>
        <button onClick={onClickMinus} className={styles.button}>
          -1
        </button>
        <button onClick={onClickReset} className={styles.button}>
          reset
        </button>
      </div>
    </div>
  );
};
