import headerClasses from "../appHeader/header.module.css"
import React, { cloneElement, FC, ReactElement } from "react"
import { IconifyText } from "../../ui/iconfyText/IconifyText"
import { NavLink } from "react-router-dom"

interface INavBarItem {
  textClass: string
  text: string
  icon: ReactElement
  linkAddress: string
}

export const NavBarItem: FC<INavBarItem> = ({ textClass, text, icon, linkAddress }) => {
  return (
    <div className={`pl-5 pr-5 pb-4 pt-4 ${headerClasses.navbarItem}`}>
      <NavLink to={linkAddress}>
        {({ isActive }) => (
          <IconifyText
            text={text}
            textClass={`${textClass} ${isActive ? "" : "text_color_inactive"}`}
            iconLocation="left"
            gapInPx={8}
            icon={isActive ? cloneElement(icon, { type: "primary" }) : icon}
          />
        )}
      </NavLink>
    </div>
  )
}
