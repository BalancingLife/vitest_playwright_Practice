import styles from "./page.module.css";
import { Counter } from "../components/counter";

export default function CounterPage() {
  return (
    <div>
      <Counter className={styles.counter} />
    </div>
  );
}
