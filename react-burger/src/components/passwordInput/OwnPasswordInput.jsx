import {useState} from "react";
import {PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

export const OwnPasswordInput = ({extraClass}) => {
    const [value, setValue] = useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <PasswordInput
            onChange={onChange}
            value={value}
            name={'password'}
            extraClass={extraClass}
        />
    )
}