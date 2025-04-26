import { Article } from "../../App.types";

export interface ImageCardProps {
  article: Article;
  open: (imageUrl: string) => void;
}