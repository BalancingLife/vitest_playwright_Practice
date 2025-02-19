import styles from "./styles.module.css";

export const InputTextLabeled = () => {
  return (
    <div>
      <div className={styles.labelBox}>
        <label className={styles.label} htmlFor="Label">
          라벨
        </label>
      </div>
      <input className={styles.input} type="text" id="label" />
      <div className={styles.view}>값1: </div>
    </div>
  );
};
