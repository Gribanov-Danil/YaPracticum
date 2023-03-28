import {URL_LOGOUT} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {fetchDataError, fetchingData, logoutUser} from "../service/reducers/userDataSlice";
import {AppDispatch} from "../service/store";


export const postLogout = (token: string) => async (dispatch: AppDispatch) => {
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
