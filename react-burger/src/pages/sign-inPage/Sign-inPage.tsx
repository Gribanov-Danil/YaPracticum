import styles from '../pagesStyles.module.css'
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import {postAuth} from "../../utils/postAuth";
import {useDispatch} from "react-redux";
import {unwrapResult} from "@reduxjs/toolkit";

export const SignInPage = () => {
    const navigate = useNavigate();
    const onRegistrationClick = () => navigate('/register', { replace: true })
    const onResetPasswordClick = () => navigate('/forgot-password', { replace: true })

    const [emailValue, setEmailValue] = useState('')

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)

    const [passwordValue, setPasswordValue] = useState('')
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)

    const dispatch = useDispatch()
    const onLoginClick = async () => {
        // TODO ts-ignore
        // @ts-ignore
        let isSuccess = await dispatch(postAuth(emailValue, passwordValue))
        // TODO ts-ignore
        // @ts-ignore
        unwrapResult(isSuccess)
        if (isSuccess) {
            navigate('/', { replace: true })
        }
    }
  return (
      <main className={styles.page}>
          <div className={styles.registration_container}>
              <h1 className={`text text_type_main-medium mb-6`}>Вход</h1>
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
              <Button onClick={onLoginClick} htmlType="button" type="primary" size="medium" extraClass={`mb-20`}>
                  Войти
              </Button>
              <div className={styles.registration_text_block}>
                  <div className={styles.text_item}>
                      <span className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}>
                          Вы&nbsp;&mdash; новый пользователь?
                      </span>
                      <Button onClick={onRegistrationClick} htmlType="button" type="secondary" size="medium" extraClass={styles.registration_btn}>
                          Зарегестрироваться
                      </Button>
                  </div>
                  <div className={styles.text_item}>
                      <span className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}>
                          Забыли пароль?
                      </span>
                      <Button onClick={onResetPasswordClick} htmlType="button" type="secondary" size="medium" extraClass={styles.registration_btn}>
                          Восстановить пароль
                      </Button>
                  </div>
              </div>
          </div>
      </main>
  )
}