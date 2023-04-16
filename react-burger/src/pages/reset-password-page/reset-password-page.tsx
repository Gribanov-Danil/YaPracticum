import styles from "../pagesStyles.module.css"
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"
import { postResetPassword } from "../../utils/postResetPassword"
import { useAppDispatch } from "../../hooks/redux"
import { useForm } from "../../hooks/use-form"

interface IResetPasswordPageForm {
  token: string
  password: string
}

/* /reset-password */
export const ResetPasswordPage = () => {
  const navigate = useNavigate()
  const initialStateForm: IResetPasswordPageForm = {
    token: "",
    password: "",
  }
  const { values, handleChange } = useForm(initialStateForm)
  const onLoginClick = () => navigate("/login", { replace: true })
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()
  const onSaveClick = async () => {
    let res = await dispatch(postResetPassword(values.password, values.token))
    if (res && res.success) {
      navigate("/login", { replace: true })
    }
  }
  const location = useLocation()
  if (location.key === "default") {
    return <Navigate to={"/"} replace />
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  return (
    <main className={styles.page}>
      <div className={styles.registration_container}>
        <form onSubmit={onSaveClick}>
          <h1 className={`text text_type_main-medium mb-6`}>Восстановление пароля</h1>
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name={"password"}
            placeholder={`Введите новый пароль`}
            extraClass={`mb-6`}
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={handleChange}
            value={values.token}
            name={"name"}
            error={false}
            ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
            extraClass={`mb-6`}
          />
          <Button
            onClick={onSaveClick}
            htmlType="button"
            type="primary"
            size="medium"
            extraClass={`mb-20`}
          >
            Сохранить
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
