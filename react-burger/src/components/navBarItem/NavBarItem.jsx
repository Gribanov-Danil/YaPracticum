import headerClasses from "../appHeader/header.module.css";
import React, {cloneElement} from "react";
import PropTypes from "prop-types";
import {IconfyText} from "../iconfyText/IconfyText";
import {NavLink} from "react-router-dom";


export const NavBarItem = ({textClass, text, icon, linkAddress}) => {
    return (
        <div className={`pl-5 pr-5 pb-4 pt-4 ${headerClasses.navbarItem}`}>
            <NavLink to={linkAddress}>
                {
                    ({ isActive }) =>
                        (<IconfyText
                            text={text}
                            textClass={`${textClass} ${isActive? '':  "text_color_inactive"}`}
                            iconLocation="Left"
                            gapInPx={8}
                            icon={isActive? cloneElement(icon, {type: "primary"}) : icon}
                        />)
                }
            </NavLink>
        </div>
    )
}

NavBarItem.propTypes = {
    textClass: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
}