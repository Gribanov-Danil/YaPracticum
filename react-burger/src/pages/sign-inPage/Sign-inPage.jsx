import styles from '../pagesStyles.module.css'
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {postRegistration} from "../../utils/postAuth";
import {useDispatch} from "react-redux";

export const SignInPage = () => {
    const navigate = useNavigate();
    const onRegistrationClick = () => navigate('/register', { replace: true })
    const onResetPasswordClick = () => navigate('/forgot-password', { replace: true })

    const [emailValue, setEmailValue] = useState('')
    const onEmailChange = e => setEmailValue(e.target.value)

    const [passwordValue, setPasswordValue] = useState('')
    const onPasswordChange = e => setPasswordValue(e.target.value)

    const dispatch = useDispatch()
    const onLoginClick = async () => {
        console.log("onLoginClick")
        let response = await dispatch(postRegistration(emailValue, passwordValue))
        if (response.success) {
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