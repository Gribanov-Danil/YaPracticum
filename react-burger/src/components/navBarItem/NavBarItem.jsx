import headerClasses from "../appHeader/header.module.css";
import React from "react";
import PropTypes from "prop-types";
import {IconfyText} from "../iconfyText/IconfyText";
import {Link} from "react-router-dom";


export const NavBarItem = ({textClass, text, icon, linkAddress}) => {
    return (
        <div className={`pl-5 pr-5 pb-4 pt-4 ${headerClasses.navbarItem}`}>
            <Link to={linkAddress}>
                <IconfyText
                    text={text}
                    textClass={textClass}
                    iconLocation="Left"
                    gapInPx={8}
                    icon={icon}
                />
            </Link>
        </div>
    )
}

NavBarItem.propTypes = {
    textClass: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
}