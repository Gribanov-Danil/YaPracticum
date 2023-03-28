import styles from "./emptyClosingBun.module.css"
import {FC} from "react";

interface IEmptyClosingBun {
    text: string
}

export const EmptyClosingBun: FC<IEmptyClosingBun> = ({text}) => {
    return (
        <div className={`ml-8 ${styles.no_bottom_bun}`}>
            {text}
        </div>
    )
}
