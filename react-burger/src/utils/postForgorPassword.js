import {URL_FORGOT_PASSWORD} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";

const {fetchDataError} = userDataSlice.actions

export const postForgotPassword = (userEmail) => async (dispatch)  => {
    try {
        const response = await AxiosRequestInstance.post(URL_FORGOT_PASSWORD, {email: userEmail});
        return response.data
    } catch (e) {
        dispatch(fetchDataError())
    }
}