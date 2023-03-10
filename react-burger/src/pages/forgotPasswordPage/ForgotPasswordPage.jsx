import styles from "../pagesStyles.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";
import {postForgotPassword} from "../../utils/postForgorPassword";
import {useSelector} from "react-redux";

/* /forgot-password */
export const ForgotPasswordPage = () => {
    const navigate = useNavigate();
    const onLoginClick = () => navigate('/login', { replace: true })
    const [emailValue, setEmailValue] = useState('')
    const onChange = e => setEmailValue(e.target.value)
    let SaveClickErrorMessage = () => <></>
    const onSaveClick = async () => {
        let response = await postForgotPassword(emailValue)
        if (response.success) {
            navigate('/reset-password', { replace: true })
        }
        else {
            SaveClickErrorMessage = () => <h1 className={`text text_type_main-medium`}>Упс, что-то пошло не так...</h1>
        }
    }
    const { user } = useSelector(state => state.userDataReducer)
    if (user.email !== '') {
        return <Navigate to={'/'} replace />
    }
    return (
        <main className={styles.page}>
            <div className={styles.registration_container}>
                <h1 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h1>
                <EmailInput
                    onChange={onChange}
                    value={emailValue}
                    name={'email'}
                    extraClass={`mb-6`}
                    placeholder={`Укажите e-mail`}
                />
                <SaveClickErrorMessage/>
                <Button onClick={onSaveClick} htmlType="button" type="primary" size="medium" extraClass={`mb-20`}>
                    Восстановить
                </Button>
                <div className={styles.registration_text_block}>
                    <div className={styles.text_item}>
                      <span className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}>
                          Вспомнили пароль?
                      </span>
                        <Button onClick={onLoginClick} htmlType="button" type="secondary" size="medium" extraClass={styles.registration_btn}>
                            Войти
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}