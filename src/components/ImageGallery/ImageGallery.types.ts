import { Article } from "../../App.types"

export interface ImageGalleryProps {
    articles: Article[];
    open: (imageUrl: string) => void;
}