import modalStyles from "./modal.module.css"
import {useEffect} from "react";
import {createPortal} from "react-dom";
import {ModalOverlay} from "../modalOverlay/ModalOverlay";
import {IngredientsDetails} from "../ingredientDetails/IngredientsDetails";

export const Modal = ({active, onClick, children, ingredient}) => {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? onClick() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [onClick]);

    const modalOverlayStyle = active? `${modalStyles.modal} ${modalStyles.active}` : modalStyles.modal
    if (!active)
        return null
    return createPortal( (
        <ModalOverlay overlayClass={modalOverlayStyle} onClick={onClick}>
            <div className={modalStyles.modal_content} onClick={(e => e.stopPropagation())}>
                {children}
            </div>
        </ModalOverlay>
        )
        , document.body
    )
}