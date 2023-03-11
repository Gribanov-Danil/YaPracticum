import {URL_PASSWORD_RESET} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";


const {fetchDataError} = userDataSlice.actions
export const postResetPassword = (password, token) => async (dispatch)  => {
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