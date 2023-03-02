import headerClasses from "../appHeader/header.module.css";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import {NavBarItem} from "../navBarItem/NavBarItem";


export const NavBar = () => {
    return (
        <nav className={headerClasses.navbar}>
            <NavBarItem
                textClass="text_type_main-default"
                text="Конструктор"
                icon={<BurgerIcon type="primary" />}
                linkAddress={'#'}
            />

            <NavBarItem
                textClass="text_type_main-default text_color_inactive"
                text="Лента заказов"
                icon={<ListIcon type="secondary" />}
                linkAddress={'#'}
            />

            <div style={{marginRight: 289}}>
                <Logo/>
            </div>

            <NavBarItem
                textClass="text_type_main-default text_color_inactive"
                text="Личный кабинет"
                icon={<ProfileIcon type="secondary"/>}
                linkAddress={'login'}
            />
        </nav>
    )
}
