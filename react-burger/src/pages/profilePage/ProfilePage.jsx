import {OwnInput} from "../../components/input/OwnInput";
import {OwnEmailInput} from "../../components/emailInput/EmailInput";
import {OwnPasswordInput} from "../../components/passwordInput/OwnPasswordInput";
import profileStyles from './profilePage.module.css'

export const ProfilePage = () => {
    return (
        <div className={profileStyles.container}>
            <div className={profileStyles.navigation_container}>
                <a className={`text text_type_main-medium ${profileStyles.nav_link}`} href={"#"}>
                    Профиль
                </a>
                <a className={`text text_type_main-medium text_color_inactive ${profileStyles.nav_link}`} href={"#"}>
                    История заказов
                </a>
                <a className={`text text_type_main-medium text_color_inactive mb-20 ${profileStyles.nav_link}`} href={"#"}>
                    Выход
                </a>
                <span className={`text text_type_main-default ${profileStyles.navigation_span}`}>
                    В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные
                </span>
            </div>
            <div>
                <OwnInput extraClass={`mb-6`} placeholder={`Имя`} icon={`EditIcon`}/>
                <OwnEmailInput extraClass={`mb-6`} placeholder={`Логин`} isIcon={true}/>
                <OwnPasswordInput icon={`EditIcon`}/>
            </div>
        </div>
    )
}