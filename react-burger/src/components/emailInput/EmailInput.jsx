import {useState} from "react";
import {EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";

export const OwnEmailInput = ({extraClass}) => {
    const [value, setValue] = useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <EmailInput
            onChange={onChange}
            value={value}
            name={'email'}
            isIcon={false}
            extraClass={extraClass}
        />
    )
}