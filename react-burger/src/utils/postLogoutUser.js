import {URL_LOGOUT} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";

const {logoutUser, fetchingData, fetchDataError} = userDataSlice.actions

export const postLogout= (token) => async (dispatch) => {
    dispatch(fetchingData())
    console.log("опа")
    try {
        const response = await AxiosRequestInstance.post(URL_LOGOUT, {
            token
        });
        dispatch(logoutUser())
        return response.data;
    } catch (e) {
        dispatch(fetchDataError())
    }
}
