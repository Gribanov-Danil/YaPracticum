import {URL_PASSWORD_RESET} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";

// TODO разобраться с ошибкой 404
export const postResetPassword = async (password, token)  => {
    try {
        const response = await AxiosRequestInstance.post(URL_PASSWORD_RESET,
            {
                password: password,
                token: token
            }
        );
        return response.data
    } catch (e) {
        console.log("error")
    }
}