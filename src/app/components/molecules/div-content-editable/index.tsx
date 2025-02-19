import styles from "./styles.module.css";

export const DivContentEditable = () => {
  return (
    <div>
      <div className={styles.input} contentEditable />
      <div className={styles.view}>값2: </div>
    </div>
  );
};
