import {useRef, useState} from "react";
import {Input} from "@ya.praktikum/react-developer-burger-ui-components";

export const OwnInput = ({extraClass, initialState, placeholder}) => {
    const [value, setValue] = useState(initialState)
    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <Input
            type={'text'}
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}
            value={value}
            name={'name'}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={extraClass}
        />
    )
}