import {useRef, useState} from "react";
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

export const ProfileDataPage = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    return (
            <>
                <Input
                    type={'text'}
                    placeholder={`Имя`}
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass={`mb-6`}
                    icon={`EditIcon`}
                />
                <EmailInput
                    onChange={e => setEmailValue(e.target.value)}
                    value={emailValue}
                    name={'email'}
                    isIcon={true}
                    extraClass={`mb-6`}
                    placeholder={`Логин`}
                />
                <PasswordInput
                    onChange={e => setPasswordValue(e.target.value)}
                    value={passwordValue}
                    name={'password'}
                    icon={`EditIcon`}
                />
            </>
        )
}