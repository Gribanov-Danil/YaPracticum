import modalStyles from "./modal.module.css"
import {FC, ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";
import {ModalOverlay} from "../modalOverlay/ModalOverlay";
import ingredientsDetailsStyles from "../ingredientDetails/ingredientsDetails.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useLocation} from "react-router-dom";

interface IModal {
    onClick: () => void
    active?: boolean
    children?: ReactNode
    title?: string
}

export const Modal: FC<IModal> = ({active, onClick, children, title}) => {
    const location = useLocation()
    // TODO разобрать e: any
    useEffect(() => {
        const closeOnEscapeKey = (e: any) => e.key === "Escape" ? onClick() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [onClick]);

    const modalOverlayStyle = (location.pathname !== `/` || active) ? `${modalStyles.modal} ${modalStyles.active}` : modalStyles.modal

    return createPortal( (
        <ModalOverlay overlayClass={modalOverlayStyle} onClick={onClick}>
            <div className={modalStyles.modal_content} onClick={(e => e.stopPropagation())}>
                <div className={`${ingredientsDetailsStyles.header} mt-10 mr-10 mb-6 ml-10`}>
                    <p className={`text text_type_main-large`}>{title}</p>
                    <div className={ingredientsDetailsStyles.close}>
                        <CloseIcon type="primary" onClick={onClick}/>
                    </div>
                </div>
                {children}
            </div>
        </ModalOverlay>
        )
        , document.body
    )
}