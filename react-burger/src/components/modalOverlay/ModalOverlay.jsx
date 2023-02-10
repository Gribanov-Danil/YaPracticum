import React from 'react';
import {createPortal} from "react-dom";
import PropTypes from "prop-types";

export const ModalOverlay = ({children, overlayClass, onClick}) => {

    return createPortal(
        (
            <div className={overlayClass} onClick={() => onClick()}>
                {children}
            </div>

        ), document.body
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func,
    overlayClass: PropTypes.string
}