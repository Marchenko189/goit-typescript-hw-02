import css from "./ImageCard.module.css";

export default function ImageCard({ article, open }) {
    return (
        <div onClick={() => open(article.urls.regular)}>
            <img className={css.image} src={article.urls.small} alt={article.altDescription} />
        </div>
    )
}