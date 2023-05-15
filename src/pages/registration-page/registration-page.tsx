import styles from "../pagesStyles.module.css"
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components"
import { useNavigate } from "react-router-dom"
import { FormEvent, useEffect, useRef } from "react"
import { postRegistration } from "../../utils/REST/postRegistration"
import { useAppDispatch } from "../../hooks/redux"
import { useForm } from "../../hooks/use-form"

interface IRegistrationPageForm {
  name: string
  email: string
  password: string
}

/**
 * Страница регистрации
 */
export const RegistrationPage = () => {
  const navigate = useNavigate()
  const onLoginClick = () => navigate("/login", { replace: true })
  const initialStateForm: IRegistrationPageForm = {
    name: "",
    email: "",
    password: "",
  }
  const { values, handleChange } = useForm(initialStateForm)

  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useAppDispatch()
  const onRegistrationClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      postRegistration({ email: values.email, password: values.password, name: values.name }),
    )
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  return (
    <main className={styles.page}>
      <div className={styles.registration_container}>
        <form onSubmit={onRegistrationClick} className={styles.form}>
          <h1 className={`text text_type_main-medium mb-6`}>Регистрация</h1>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={handleChange}
            value={values.name}
            name={"name"}
            error={false}
            ref={inputRef}
            errorText={"Ошибка"}
            size={"default"}
            extraClass={`mb-6`}
          />
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
          <Button htmlType="submit" type="primary" size="medium" extraClass={`mb-20`}>
            Зарегистрироваться
          </Button>
        </form>

        <div className={styles.registration_text_block}>
          <div className={styles.text_item}>
            <span
              className={`text text_type_main-default text_color_inactive ${styles.registration_text}`}
            >
              Уже зарегистрированы?
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
