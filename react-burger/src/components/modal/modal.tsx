import modalStyles from "./modal.module.css"
import { FC, ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import { ModalOverlay } from "../modal-overlay/modal-overlay"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useLocation } from "react-router-dom"

interface IModal {
  onClick: () => void
  active?: boolean
  children?: ReactNode
}

export const Modal: FC<IModal> = ({ active, onClick, children }) => {
  const location = useLocation()
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? onClick() : null)
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    }
  }, [onClick])

  const modalOverlayStyle =
    location.pathname !== `/` || active
      ? `${modalStyles.modal} ${modalStyles.active}`
      : modalStyles.modal

  return createPortal(
    <ModalOverlay overlayClass={modalOverlayStyle} onClick={onClick}>
      <div className={modalStyles.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={modalStyles.close}>
          <CloseIcon type="primary" onClick={onClick} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    document.body,
  )
}
