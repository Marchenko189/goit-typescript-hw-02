import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

export default function LoadMoreBtn({moreImg}: LoadMoreBtnProps) {
    return (
        <div className={css.container}>
            <button className={css.load} onClick={moreImg}>Load more</button>
        </div>
        
    )
}