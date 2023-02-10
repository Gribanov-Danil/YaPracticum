import headerClasses from "../appHeader/header.module.css";
import React from "react";
import PropTypes from "prop-types";
import {IconfyText} from "../iconfyText/IconfyText";


export const NavBarItem = ({textClass, text, icon}) => {
    return (
        <div className={`pl-5 pr-5 pb-4 pt-4 ${headerClasses.navbarItem}`}>
            <a href="#">
                <IconfyText
                    text={text}
                    textClass={textClass}
                    iconLocation="Left"
                    gapInPx={8}
                    icon={icon}
                />
            </a>
        </div>
    )
}

NavBarItem.propTypes = {
    textClass: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.element
}