import { FC, ReactElement } from "react"
import styles from "./iconic-text.module.css"

interface IIconicText {
  text: string
  textClass: string
  iconLocation: "right" | "left"
  gapInPx: number
  icon: ReactElement
}

/**
 * Текст с иконкой
 * @param text текст
 * @param textClass стил для текста
 * @param iconLocation "right" | "left" расположение иконки
 * @param gapInPx гэп между текстом и иконкой в пикселях
 * @param icon компонент иконки
 */
export const IconicText: FC<IIconicText> = ({ text, textClass, iconLocation, gapInPx, icon }) => {
  let OutputComponent: FC
  const textBlock = <p className={`text ${textClass}`}>{text}</p>
  if (iconLocation === "right")
    OutputComponent = () => {
      return (
        <div style={{ gap: gapInPx }} className={styles.iconic_text}>
          {textBlock}
          {icon}
        </div>
      )
    }
  else
    OutputComponent = () => {
      return (
        <div style={{ gap: gapInPx }} className={styles.iconic_text}>
          {icon}
          {textBlock}
        </div>
      )
    }

  return <OutputComponent />
}
