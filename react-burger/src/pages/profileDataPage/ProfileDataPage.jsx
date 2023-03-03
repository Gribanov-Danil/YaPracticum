import {OwnInput} from "../../components/input/OwnInput";
import {OwnEmailInput} from "../../components/emailInput/EmailInput";
import {OwnPasswordInput} from "../../components/passwordInput/OwnPasswordInput";

export const ProfileDataPage = () => {
    return (
            <>
                <OwnInput extraClass={`mb-6`} placeholder={`Имя`} icon={`EditIcon`}/>
                <OwnEmailInput extraClass={`mb-6`} placeholder={`Логин`} isIcon={true}/>
                <OwnPasswordInput icon={`EditIcon`}/>
            </>
        )
}