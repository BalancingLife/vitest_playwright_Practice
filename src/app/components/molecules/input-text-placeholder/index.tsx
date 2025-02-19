import styles from "./styles.module.css";

export const InputTextPlaceHolder = () => {
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        id="label"
        placeholder="값을 입력해주세요"
      />
      <div className={styles.view}>값2: </div>
    </div>
  );
};
