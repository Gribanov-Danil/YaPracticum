import headerClasses from "./nav-bar.module.css"
import {
  BurgerIcon,
  ListIcon,
  Logo,
  MenuIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components"
import React, { FC } from "react"
import { NavBarItem } from "../nav-barItem/nav-barItem"
import { NavLink } from "react-router-dom"
import { HeaderLogo } from "../../assets/SVGs/header-logo/header-logo"

export const NavBar: FC = () => {
  return (
    <>
      <nav className={`${headerClasses.navbar} ${headerClasses.navbarDesktop}`}>
        <NavBarItem
          textClass="text_type_main-default"
          text="Конструктор"
          icon={<BurgerIcon type="secondary" />}
          linkAddress={"/"}
        />

        <NavBarItem
          textClass="text_type_main-default"
          text="Лента заказов"
          icon={<ListIcon type="secondary" />}
          linkAddress={"/feed"}
        />

        <div style={{ marginRight: 289 }}>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
        </div>

        <NavBarItem
          textClass="text_type_main-default"
          text="Личный кабинет"
          icon={<ProfileIcon type="secondary" />}
          linkAddress={"/profile"}
        />
      </nav>
      <nav className={`${headerClasses.navbar} ${headerClasses.navbarMobile}`}>
        <HeaderLogo />
        <MenuIcon type="primary" />
      </nav>
    </>
  )
}
