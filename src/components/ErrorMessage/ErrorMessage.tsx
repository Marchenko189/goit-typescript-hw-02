import css from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

export default function ErrorMessage ({ error }: ErrorMessageProps) {
    if (!error) return null;
    return (
      <p className={css.error}>Whoops there was an error plz reload...</p>
    )
};