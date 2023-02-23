import styles from "./emptyClosingBun.module.css"

export const EmptyClosingBun = ({text}) => {
    return (
        <div className={`ml-8 ${styles.no_bottom_bun}`}>
            {text}
        </div>
    )
}