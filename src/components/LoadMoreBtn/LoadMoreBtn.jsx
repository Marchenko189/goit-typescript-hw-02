import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({moreImg}) {
    return (
        <div className={css.container}>
            <button className={css.load} onClick={moreImg}>Load more</button>
        </div>
        
    )
}