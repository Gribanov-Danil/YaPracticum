import {URL_PASSWORD_RESET} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";

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
        console.log(e)
    }
}