import { InputTextLabeled } from "../..//molecules/input-text-labeled";
import styles from "./styles.module.css";
import { InputTextPlaceHolder } from "../../molecules/input-text-placeholder";
import { DivContentEditable } from "../../molecules/div-content-editable";

interface Props {
  className?: string;
}

export const FormText = (props: Props) => {
  return (
    <form className={`${styles.form} ${props.className}`}>
      <InputTextLabeled />
      <hr />
      <InputTextPlaceHolder />
      <hr />
      <DivContentEditable />
    </form>
  );
};
