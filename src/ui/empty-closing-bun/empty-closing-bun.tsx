import styles from "./empty-closing-bun.module.css"
import { FC } from "react"

interface IEmptyClosingBun {
  text: string
}

/**
 * Пустая нижняя булка для конструктора
 * @param text текст внутри пустой булки
 */
export const EmptyClosingBun: FC<IEmptyClosingBun> = ({ text }) => {
  return <div className={`ml-8 ${styles.no_bottom_bun}`}>{text}</div>
}
