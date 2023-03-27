import {URL_PASSWORD_RESET} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {fetchDataError} from "../service/reducers/userDataSlice";
import {AppDispatch} from "../service";


export const postResetPassword = (password: string, token: string) => async (dispatch: AppDispatch)  => {
    try {
        const response = await AxiosRequestInstance.post(URL_PASSWORD_RESET,
            {
                password: password,
                token: token
            }
        );
        return response.data
    } catch (e) {
        dispatch(fetchDataError())
    }
}