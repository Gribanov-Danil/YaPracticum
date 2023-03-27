import {URL_PASSWORD_RESET} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";
import {AnyAction, Dispatch} from "redux";


const {fetchDataError} = userDataSlice.actions
export const postResetPassword = (password: string, token: string) => async (dispatch:  Dispatch<AnyAction>)  => {
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