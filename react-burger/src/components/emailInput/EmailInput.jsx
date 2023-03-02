import {useState} from "react";
import {EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";

export const OwnEmailInput = ({extraClass, placeholder, isIcon}) => {
    const [value, setValue] = useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <EmailInput
            onChange={onChange}
            value={value}
            name={'email'}
            isIcon={isIcon}
            extraClass={extraClass}
            placeholder={placeholder}
        />
    )
}