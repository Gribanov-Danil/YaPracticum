import {URL_REGISTRATION} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import uuid from "react-uuid";

// TODO разобраться с ошибкой 403
export const postRegistration = async ()  => {
    try {
        let email = uuid()
        const response = await AxiosRequestInstance.post(URL_REGISTRATION,
            {
                email: `gribanovtestwork2022@yandex.ru`,
                password: "passwordik",
                name: "Danil"
            }
        )
        return response
        // return response.data
    } catch (e) {
        console.log(e)
    }
}