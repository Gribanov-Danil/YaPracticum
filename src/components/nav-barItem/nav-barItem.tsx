import headerClasses from "../nav-bar/nav-bar.module.css"
import { cloneElement, FC, ReactElement } from "react"
import { IconicText } from "../../ui/iconic-text/iconic-text"
import { NavLink } from "react-router-dom"

interface INavBarItem {
  textClass: string
  text: string
  icon: ReactElement
  linkAddress: string
}

/**
 * Элемент навигации
 * @param textClass стиль текста элемента навигации
 * @param text текст элемента навигации
 * @param icon иконка элемента навигации
 * @param linkAddress ссылка, открывающаяся при клике на элемент навигации
 */
export const NavBarItem: FC<INavBarItem> = ({ textClass, text, icon, linkAddress }) => {
  return (
    <div className={`pl-5 pr-5 pb-4 pt-4 ${headerClasses.navbarItem}`}>
      <NavLink to={linkAddress}>
        {({ isActive }) => (
          <IconicText
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
