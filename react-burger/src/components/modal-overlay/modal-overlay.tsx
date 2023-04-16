import { FC, ReactNode } from "react"

interface IModalOverlay {
  onClick: () => void
  overlayClass: string
  children?: ReactNode
}

export const ModalOverlay: FC<IModalOverlay> = ({ children, overlayClass, onClick }) => {
  return (
    <div className={overlayClass} onClick={() => onClick()}>
      {children}
    </div>
  )
}
