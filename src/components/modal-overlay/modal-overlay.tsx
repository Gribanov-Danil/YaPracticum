import { FC, ReactNode } from "react"
import styles from "./overlay.module.css"

interface IModalOverlay {
  onClick: () => void
  children?: ReactNode
}

/**
 * Оверлей модального окна
 * @param children ReactNode
 * @param onClick функция, вызывающая при клике на оверлей модального окна
 * @constructor
 */
export const ModalOverlay: FC<IModalOverlay> = ({ children, onClick }) => {
  return (
    <div data-cy={"close-modal-overlay"} className={styles.overlay} onClick={() => onClick()}>
      {children}
    </div>
  )
}
