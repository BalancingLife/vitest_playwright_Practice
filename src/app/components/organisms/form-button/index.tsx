import { Checkbox } from "../../molecules/checkbox";
import { RadioButton } from "../../molecules/radio-button";
import styles from "./styles.module.css";

interface Props {
  className?: string;
}

export const FormButton = (props: Props) => {
  return (
    <form className={`${styles.form} ${props.className}`}>
      <Checkbox />
      <hr />
      <RadioButton />
    </form>
  );
};
