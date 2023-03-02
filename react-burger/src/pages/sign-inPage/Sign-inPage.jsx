import styles from '../pagesStyles.module.css'
import {OwnEmailInput} from "../../components/emailInput/EmailInput";
import {OwnPasswordInput} from "../../components/passwordInput/OwnPasswordInput";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";

export const SignInPage = () => {
    const navigate = useNavigate();
    const onRegistrationClick = () => {
        navigate('/register', { replace: true })
    }
    const onResetPasswordClick = () => {
        navigate('/forgot-password', { replace: true })
    }
  return (
      <main className={styles.page}>
          <div className={styles.registration_container}>
              <h1 className={`text text_type_main-medium mb-6`}>Вход</h1>
              <OwnEmailInput extraClass={`mb-6`}/>
              <OwnPasswordInput extraClass={`mb-6`}/>
              <Button htmlType="button" type="primary" size="medium" extraClass={`mb-20`}>
                  Войти
              </Button>
              <div className={styles.registration_text_block}>
                  <div className={styles.text_item}>
                      <span className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}>
                          Вы - новый пользователь?
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