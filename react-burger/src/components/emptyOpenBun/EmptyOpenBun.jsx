import styles from "./emptyOpenBun.module.css"

export const EmptyOpenBun = ({text}) => {
    return (
            <div className={`ml-8 ${styles.no_top_bun}`}>
                {text}
            </div>
    )
}