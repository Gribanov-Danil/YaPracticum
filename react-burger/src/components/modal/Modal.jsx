import modalStyles from "./modal.module.css"
import {useEffect} from "react";
import {createPortal} from "react-dom";
import {ModalOverlay} from "../modalOverlay/ModalOverlay";
import ingredientsDetailsStyles from "../ingredientDetails/ingredientsDetails.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const Modal = ({active, onClick, children, title}) => {
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

Modal.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string
}