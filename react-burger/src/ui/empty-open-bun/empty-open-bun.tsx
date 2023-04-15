import styles from "./empty-open-bun.module.css"
import { FC } from "react"

interface IEmptyOpenBun {
  text: string
}

export const EmptyOpenBun: FC<IEmptyOpenBun> = ({ text }) => {
  return <div className={`ml-8 ${styles.no_top_bun}`}>{text}</div>
}
