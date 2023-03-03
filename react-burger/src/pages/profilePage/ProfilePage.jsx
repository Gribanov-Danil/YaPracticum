import profileStyles from './profilePage.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import {ProfileDataPage} from "../profileDataPage/ProfileDataPage";
import {UserOrdersPage} from "../userOrdersPage/UserOrdersPage";

export const ProfilePage = () => {
    return (
        <div className={profileStyles.container}>
            <div className={profileStyles.navigation_container}>
                <NavLink end={true} to={"/profile"}>
                    {
                        ({ isActive }) =>
                            (<p className={`text text_type_main-medium ${profileStyles.nav_link} ${isActive? '':  "text_color_inactive"}`}>
                                Профиль
                            </p>)
                    }
                </NavLink>
                <NavLink to={"orders"}>
                    {
                        ({ isActive }) =>
                            (<p className={`text text_type_main-medium ${profileStyles.nav_link} ${isActive? '':  "text_color_inactive"}`}>
                                История заказов
                            </p>)
                    }
                </NavLink>
                <a className={`text text_type_main-medium text_color_inactive mb-20 ${profileStyles.nav_link}`} href={"#"}>
                    Выход
                </a>
                <span className={`text text_type_main-default ${profileStyles.navigation_span}`}>
                    В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные
                </span>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<ProfileDataPage/>}/>
                    <Route path={'orders'} element={<UserOrdersPage/>}/>
                </Routes>
            </div>
        </div>
    )
}