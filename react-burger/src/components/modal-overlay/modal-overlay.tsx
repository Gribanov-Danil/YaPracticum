import { FC, ReactNode } from "react"
import styles from "./overlay.module.css"

interface IModalOverlay {
  onClick: () => void
  children?: ReactNode
}

export const ModalOverlay: FC<IModalOverlay> = ({ children, onClick }) => {
  return (
    <div className={styles.overlay} onClick={() => onClick()}>
      {children}
    </div>
  )
}
