import { FC, FormEvent, useEffect, useRef, useState } from "react"
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components"
import { patchAuthUser } from "../../utils/authUserResponse"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useForm } from "../../hooks/use-form"
import styles from "../pagesStyles.module.css"

interface IProfileDataPageForm {
  name: string
  email: string
  password: string
}

export const ProfileDataPage: FC = () => {
  const { user } = useAppSelector((state) => state.userDataReducer)

  const initialStateForm: IProfileDataPageForm = {
    name: user.name,
    email: user.email,
    password: "",
  }
  const { values, handleChange, setValues } = useForm(initialStateForm)

  const [isEditFieldVisible, setIsEditFieldVisible] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    setIsEditFieldVisible(JSON.stringify(initialStateForm) !== JSON.stringify(values))
  }, [values.name, values.password, initialStateForm])

  const dispatch = useAppDispatch()

  const applyChanges = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let res = await dispatch(patchAuthUser(values.name, values.email, values.password))
    if (!res) {
      setIsEditFieldVisible(false)
      setValues(initialStateForm)
    }
  }

  return (
    <form onSubmit={applyChanges} className={styles.form}>
      <Input
        type={"text"}
        placeholder={`Имя`}
        onChange={handleChange}
        value={values.name}
        name={"name"}
        error={false}
        ref={inputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass={`mb-6`}
        icon={`EditIcon`}
      />
      <EmailInput
        onChange={handleChange}
        value={values.email}
        name={"email"}
        isIcon={true}
        extraClass={`mb-6`}
        placeholder={`Логин`}
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password}
        name={"password"}
        icon={`EditIcon`}
      />
      {isEditFieldVisible && (
        <div className={` mt-6`}>
          <Button
            onClick={() => setValues(initialStateForm)}
            htmlType="button"
            type="secondary"
            size="medium"
          >
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  )
}
