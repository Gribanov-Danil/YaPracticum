import modalStyles from "./modal.module.css"
import { FC, ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"
import { ModalOverlay } from "../modal-overlay/modal-overlay"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"

interface IModal {
  onClick: () => void
  children?: ReactNode
}

const portal = document.getElementById("react-modals") as HTMLDivElement

export const Modal: FC<IModal> = ({ onClick, children }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === "Escape" ? onClick() : null)
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    }
  }, [onClick])

  return createPortal(
    <ModalOverlay onClick={onClick}>
      <div className={modalStyles.modal_content} onClick={(e) => e.stopPropagation()}>
        <div data-cy={"close-modal-closeIcon"} className={modalStyles.close}>
          <CloseIcon type="primary" onClick={onClick} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    portal,
  )
}
