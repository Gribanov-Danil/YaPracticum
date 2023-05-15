import styles from "./empty-open-bun.module.css"
import { FC } from "react"

interface IEmptyOpenBun {
  text: string
}

/**
 * Пустая верхняя булка для конструктора
 * @param text текст внутри пустой булки
 */
export const EmptyOpenBun: FC<IEmptyOpenBun> = ({ text }) => {
  return <div className={`ml-8 ${styles.no_top_bun}`}>{text}</div>
}
