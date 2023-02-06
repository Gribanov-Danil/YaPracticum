import headerClasses from "../header.module.css";
import React from "react";


export const NavBarItem = ({additionalClass, text, children}) => {
    return (
        <div className={`pl-5 pr-5 pb-4 pt-4 ${headerClasses.navbarItem}`}>
            {children}
            <p style={{display: "inline-block", paddingLeft: 8}} className={"text text_type_main-default " + additionalClass}>
                {text}
            </p>
        </div>
    )
}