import styles from "../pagesStyles.module.css";
import {OwnInput} from "../../components/input/OwnInput";
import {OwnPasswordInput} from "../../components/passwordInput/OwnPasswordInput";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

export const ResetPasswordPage = () => {
    return (
        <main className={styles.page}>
            <div className={styles.registration_container}>
                <h1 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h1>
                <OwnPasswordInput extraClass={`mb-6`} placeholder={`Введите новый пароль`}/>
                <OwnInput extraClass={`mb-6`} placeholder={'Введите код из письма'}/>
                <Button htmlType="button" type="primary" size="medium" extraClass={`mb-20`}>
                    Сохранить
                </Button>
                <div className={styles.registration_text_block}>
                    <div className={styles.text_item}>
                      <span className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}>
                          Вспомнили пароль?
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