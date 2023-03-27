import profileStyles from './profilePage.module.css'
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";
import {ProfileDataPage} from "../profileDataPage/ProfileDataPage";
import {UserOrdersPage} from "../userOrdersPage/UserOrdersPage";
import {ProtectedRouteElement} from "../../hocs/protectedRouteElement/ProtectedRouteElement";
import {postLogout} from "../../utils/postLogoutUser";
import {getCookie} from "../../service/cookies/getCookie";
import {unwrapResult} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../hooks/redux";

export const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onExitClick = async () => {
        let response
        let refreshToken = getCookie('refreshToken')
        if (refreshToken) {
            response = await dispatch(postLogout(refreshToken))
        }
        unwrapResult(response)
        if (response.success) {
            navigate('/login', { replace: true })
        }
    }
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
                <button onClick={onExitClick} className={`text text_type_main-medium text_color_inactive mb-20 ${profileStyles.exit_btn} ${profileStyles.nav_link}`}>
                    Выход
                </button>
                <span className={`text text_type_main-default ${profileStyles.navigation_span}`}>
                    В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные
                </span>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<ProtectedRouteElement element={<ProfileDataPage />}/>}/>
                    <Route path={'orders'} element={<ProtectedRouteElement element={<UserOrdersPage />}/>}/>
                </Routes>
            </div>
        </div>
    )
}