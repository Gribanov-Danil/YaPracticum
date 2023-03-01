import styles from "../sign-inPage/sign-inPage.module.css"
import {OwnEmailInput} from "../../components/emailInput/EmailInput";
import {OwnPasswordInput} from "../../components/passwordInput/OwnPasswordInput";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {OwnInput} from "../../components/input/OwnInput";

export const RegistrationPage = () => {
    return (
        <main className={styles.page}>
            <div className={styles.registration_container}>
                <h1 className={`text text_type_main-medium mb-6`}>Регистрация</h1>
                <OwnInput extraClass={`mb-6`} placeholder={'Имя'}/>
                <OwnEmailInput extraClass={`mb-6`}/>
                <OwnPasswordInput extraClass={`mb-6`}/>
                <Button htmlType="button" type="primary" size="medium" extraClass={`mb-20`}>
                    Зарегистрироваться
                </Button>
                <div className={styles.registration_text_block}>
                    <div className={styles.text_item}>
                      <span className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}>
                          Уже зарегистрированы?
                      </span>
                        <Button htmlType="button" type="secondary" size="medium" extraClass={styles.registration_btn}>
                            Войти
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}