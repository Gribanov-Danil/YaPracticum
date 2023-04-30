import headerClasses from "../app-header/header.module.css"
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components"
import React, { FC } from "react"
import { NavBarItem } from "../nav-barItem/nav-barItem"
import { NavLink } from "react-router-dom"

export const NavBar: FC = () => {
  return (
    <nav className={headerClasses.navbar}>
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
  )
}
