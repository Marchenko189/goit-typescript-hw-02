import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

export default function ImageCard({ article, open }: ImageCardProps) {
    return (
        <div onClick={() => open(article.urls.regular)}>
            <img className={css.image} src={article.urls.small} alt={article.altDescription} />
        </div>
    )
}