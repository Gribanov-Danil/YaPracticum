import styles from "../pagesStyles.module.css"
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useRef, useState} from "react";
import {postRegistration} from "../../utils/postRegistration";
import {useDispatch} from "react-redux";

export const RegistrationPage = () => {
    const navigate = useNavigate();
    const onLoginClick = () => navigate('/login', { replace: true })

    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)

    const [emailValue, setEmailValue] = useState('')
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)

    const [passwordValue, setPasswordValue] = useState('')
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)

    const dispatch = useDispatch()
    const onRegistrationClick = async () => {
        // TODO ts-ignore
        // @ts-ignore
        dispatch(postRegistration(emailValue, passwordValue, inputValue))
    }
    return (
        <main className={styles.page}>
            <div className={styles.registration_container}>
                <h1 className={`text text_type_main-medium mb-6`}>Регистрация</h1>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass={`mb-6`}
                />
                <EmailInput
                    onChange={onEmailChange}
                    value={emailValue}
                    name={'email'}
                    extraClass={`mb-6`}
                />
                <PasswordInput
                    onChange={onPasswordChange}
                    value={passwordValue}
                    name={'password'}
                    extraClass={`mb-6`}
                />
                <Button onClick={onRegistrationClick} htmlType="button" type="primary" size="medium" extraClass={`mb-20`}>
                    Зарегистрироваться
                </Button>
                <div className={styles.registration_text_block}>
                    <div className={styles.text_item}>
                      <span className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}>
                          Уже зарегистрированы?
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