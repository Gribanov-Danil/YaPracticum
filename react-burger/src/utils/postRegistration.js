import {URL_REGISTRATION} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";

// TODO разобраться с ошибкой 403
export const postRegistration = async ()  => {
    try {
        const response = await AxiosRequestInstance.post(URL_REGISTRATION,
            {
                email: "test-data@yandex.ru",
                password: "password",
                name: "Username"
            }
        )
        // return response.data
    } catch (e) {
        console.log("error")
    }
}