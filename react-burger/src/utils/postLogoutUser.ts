import {URL_LOGOUT} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";
import {AnyAction, Dispatch} from "redux";

const {logoutUser, fetchingData, fetchDataError} = userDataSlice.actions

export const postLogout = (token: string) => async (dispatch:  Dispatch<AnyAction>) => {
    dispatch(fetchingData())
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
