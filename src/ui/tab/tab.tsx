import clsx from "clsx"
import { FC, PropsWithChildren, useCallback } from "react"
import styles from "./tab.module.css"

/**
 * Табы для навигации
 *
 * @param {active} active флаг на активность таба
 * @param {value} value значение, хранящееся в табе
 * @param {onClick} onClick функция, вызываемая при клике на таб
 * @param {extraClass} extraClass дополнительная кастомизация таба
 */
export const Tab: FC<
  PropsWithChildren<{
    active: boolean
    value: string
    onClick: (value: string) => void
    extraClass?: string
  }>
> = ({ active, value, children, onClick: handleClick, extraClass }) => {
  const className = clsx(
    styles.tab,
    {
      tab_type_current: active,
    },
    extraClass,
    "noselect",
  )

  const onClick = useCallback(() => {
    if (typeof handleClick === "function") {
      handleClick(value)
    }
  }, [handleClick, value])

  return (
    <div className={className} onClick={onClick}>
      <span className="text text_type_main-default">{children}</span>
    </div>
  )
}
