import css from "./ErrorMessage.module.css"

export default function ErrorMessage({ error }) {
    if (!error) return null;
    return (
      <p className={css.error}>Whoops there was an error plz reload...</p>
    )
}