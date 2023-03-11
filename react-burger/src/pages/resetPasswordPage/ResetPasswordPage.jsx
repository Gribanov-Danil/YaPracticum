import styles from "../pagesStyles.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Navigate, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {postResetPassword} from "../../utils/postResetPassword";
import {useSelector} from "react-redux";

/* /reset-password */
export const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const onLoginClick = () => navigate('/login', { replace: true })
    const [newPasswordValue, setNewPasswordValue] = useState('')
    const onPasswordChange = e => setNewPasswordValue(e.target.value)
    const [tokenValue, setTokenValue] = useState('')
    const onTokenChange = e => setTokenValue(e.target.value)
    const inputRef = useRef(null)

    let SaveClickMessage = () => <></>
    const onSaveClick = async () => {
        await postResetPassword(newPasswordValue, tokenValue)
    }

    const { user } = useSelector(state => state.userDataReducer)
    if (user.email !== '') {
        return <Navigate to={'/'} replace />
    }
    return (
        <main className={styles.page}>
            <div className={styles.registration_container}>
                <h1 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h1>
                <SaveClickMessage/>
                <PasswordInput
                    onChange={onPasswordChange}
                    value={newPasswordValue}
                    name={'password'}
                    placeholder={`Введите новый пароль`}
                    extraClass={`mb-6`}
                />
                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={onTokenChange}
                    value={tokenValue}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass={`mb-6`}
                />
                <Button onClick={onSaveClick} htmlType="button" type="primary" size="medium" extraClass={`mb-20`}>
                    Сохранить
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