import headerClasses from "../header.module.css";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {NavBarItem} from "../navBarItem/NavBarItem";


export const NavBar = () => {
    return (
        <nav className={headerClasses.navbar}>
            <NavBarItem text="Конструктор">
                <BurgerIcon type="primary" />
            </NavBarItem>
            <NavBarItem text="Лента заказов" additionalClass={"text_color_inactive"}>
                <ListIcon type="secondary" />
            </NavBarItem>
            <div style={{marginRight: 289}}>
                <Logo/>
            </div>
            <NavBarItem text="Личный кабинет" additionalClass={"text_color_inactive"}>
                <ProfileIcon type="secondary" />
            </NavBarItem>
        </nav>
    )

}
