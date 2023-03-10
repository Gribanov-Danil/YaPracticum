import {useEffect, useRef, useState} from "react";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {patchAuthUser} from "../../utils/authUserResponse";

export const ProfileDataPage = () => {
    const { user } = useSelector(state => state.userDataReducer)
    const initialStateForm = {
        name: user.name,
        email: user.email,
        password: ''
    }
    const [form, setForm] = useState(initialStateForm)

    const [isEditFieldVisible, setIsEditFieldVisible] = useState(false)

    const inputRef = useRef(null)
    useEffect(() => {
        setIsEditFieldVisible(JSON.stringify(initialStateForm) !== JSON.stringify(form))
    }, [form.name, form.password, form.login, initialStateForm])

    const dispatch = useDispatch()

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value.trim() })

    const applyChanges = async () => {
        let res = await dispatch(patchAuthUser(form.name, form.email, form.password))
        if (!res) {
            setIsEditFieldVisible(false)
            setForm(initialStateForm)
        }
    }

    return (
            <>
                <Input
                    type={'text'}
                    placeholder={`Имя`}
                    onChange={onChange}
                    value={form.name}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass={`mb-6`}
                    icon={`EditIcon`}
                />
                <EmailInput
                    onChange={onChange}
                    value={form.email}
                    name={'email'}
                    isIcon={true}
                    extraClass={`mb-6`}
                    placeholder={`Логин`}
                />
                <PasswordInput
                    onChange={onChange}
                    value={form.password}
                    name={'password'}
                    icon={`EditIcon`}
                />
                {isEditFieldVisible && (
                    <div className={` mt-6`}>
                        <Button
                            onClick={() => setForm(initialStateForm)}
                            htmlType='button'
                            type='secondary'
                            size='medium'
                        >
                            Отмена
                        </Button>
                        <Button
                            onClick={applyChanges}
                            htmlType='button'
                            type='primary'
                            size='medium'
                        >
                            Сохранить
                        </Button>
                    </div>
                )}
            </>
        )
}