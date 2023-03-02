import {URL_PASSWORD_RESET} from "./constants/axiosInstance";
import {ForgotPasswordInstance} from "./constants/axiosInstance";

export const postForgotPassword = async (userEmail)  => {
    try {
        const response = await ForgotPasswordInstance.post(URL_PASSWORD_RESET, {email: userEmail});
        return response.data
    } catch (e) {
        console.log("error")
    }
}