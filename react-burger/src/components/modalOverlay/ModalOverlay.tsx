import {FC, ReactNode} from 'react';
import {createPortal} from "react-dom";

interface IModalOverlay {
    onClick: () => void
    overlayClass: string
    children?: ReactNode
}

export const ModalOverlay:FC<IModalOverlay> = ({children, overlayClass, onClick}) => {
    return createPortal(
        (
            <div className={overlayClass} onClick={() => onClick()}>
                {children}
            </div>
        ), document.body
    )
}
