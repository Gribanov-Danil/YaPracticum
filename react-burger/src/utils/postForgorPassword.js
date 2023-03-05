import {URL_FORGOT_PASSWORD} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";

export const postForgotPassword = async (userEmail)  => {
    try {
        const response = await AxiosRequestInstance.post(URL_FORGOT_PASSWORD, {email: userEmail});
        return response.data
    } catch (e) {
        console.log(e)
    }
}