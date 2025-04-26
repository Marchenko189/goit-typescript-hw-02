import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";


export default function ImageGallery({articles, open}: ImageGalleryProps) {
    return (<ul className={css.gallery}>
        {articles.map((article) => (
            <li className={css.item} key={article.id}>
                <ImageCard article={article} open={open} />
            </li>
        ))}
</ul>
)
}