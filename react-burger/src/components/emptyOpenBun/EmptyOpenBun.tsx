import styles from "./emptyOpenBun.module.css"
import { FC } from "react"

interface IEmptyOpenBun {
  text: string
}

export const EmptyOpenBun: FC<IEmptyOpenBun> = ({ text }) => {
  return <div className={`ml-8 ${styles.no_top_bun}`}>{text}</div>
}
