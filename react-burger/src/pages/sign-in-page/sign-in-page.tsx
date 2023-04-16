import styles from "../pagesStyles.module.css"
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components"
import { useNavigate } from "react-router-dom"
import { postAuth } from "../../utils/postAuth"
import { useAppDispatch } from "../../hooks/redux"
import { useForm } from "../../hooks/use-form"

interface IResetPasswordPageForm {
  email: string
  password: string
}

export const SignInPage = () => {
  const navigate = useNavigate()
  const initialStateForm: IResetPasswordPageForm = {
    email: "",
    password: "",
  }
  const { values, handleChange } = useForm(initialStateForm)
  const onRegistrationClick = () => navigate("/register", { replace: true })
  const onResetPasswordClick = () => navigate("/forgot-password", { replace: true })

  const dispatch = useAppDispatch()
  const onLoginClick = async () => {
    let isSuccess = await dispatch(postAuth(values.email, values.password))
    if (isSuccess) {
      navigate("/", { replace: true })
    }
  }
  return (
    <main className={styles.page}>
      <div className={styles.registration_container}>
        <form onSubmit={onLoginClick}>
          <h1 className={`text text_type_main-medium mb-6`}>Вход</h1>
          <EmailInput
            onChange={handleChange}
            value={values.email}
            name={"email"}
            extraClass={`mb-6`}
          />
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name={"password"}
            extraClass={`mb-6`}
          />
          <Button
            onClick={onLoginClick}
            htmlType="button"
            type="primary"
            size="medium"
            extraClass={`mb-20`}
          >
            Войти
          </Button>
        </form>
        <div className={styles.registration_text_block}>
          <div className={styles.text_item}>
            <span
              className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}
            >
              Вы&nbsp;&mdash; новый пользователь?
            </span>
            <Button
              onClick={onRegistrationClick}
              htmlType="button"
              type="secondary"
              size="medium"
              extraClass={styles.registration_btn}
            >
              Зарегестрироваться
            </Button>
          </div>
          <div className={styles.text_item}>
            <span
              className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}
            >
              Забыли пароль?
            </span>
            <Button
              onClick={onResetPasswordClick}
              htmlType="button"
              type="secondary"
              size="medium"
              extraClass={styles.registration_btn}
            >
              Восстановить пароль
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
