import styles from "../pagesStyles.module.css"
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useNavigate } from "react-router-dom"
import { FC, FormEvent } from "react"
import { postForgotPassword } from "../../utils/postForgorPassword"
import { useAppDispatch } from "../../hooks/redux"
import { useForm } from "../../hooks/use-form"

/* /forgot-password */
export const ForgotPasswordPage: FC = () => {
  const navigate = useNavigate()
  const onLoginClick = () => navigate("/login", { replace: true })
  const { values, handleChange } = useForm<{ email: string }>({ email: "" })

  let SaveClickErrorMessage = () => <></>
  const dispatch = useAppDispatch()
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let response = await dispatch(postForgotPassword(values.email))
    if (response && response.success) {
      navigate("/reset-password", { replace: true })
    } else {
      SaveClickErrorMessage = () => (
        <h1 className={`text text_type_main-medium`}>Упс, что-то пошло не так...</h1>
      )
    }
  }
  return (
    <main className={styles.page}>
      <div className={styles.registration_container}>
        <form onSubmit={onSubmit} className={styles.form}>
          <h1 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h1>
          <EmailInput
            onChange={handleChange}
            value={values.email}
            name={"email"}
            extraClass={`mb-6`}
            placeholder={`Укажите e-mail`}
          />
          <SaveClickErrorMessage />
          <Button htmlType="submit" type="primary" size="medium" extraClass={`mb-20`}>
            Восстановить
          </Button>
        </form>

        <div className={styles.registration_text_block}>
          <div className={styles.text_item}>
            <span
              className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}
            >
              Вспомнили пароль?
            </span>
            <Button
              onClick={onLoginClick}
              htmlType="button"
              type="secondary"
              size="medium"
              extraClass={styles.registration_btn}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
