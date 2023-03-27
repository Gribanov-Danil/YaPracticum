import {URL_UPDATE_TOKEN} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {fetchDataError, fetchingData, updateTokens} from "../service/reducers/userDataSlice";
import {getCookie} from "../service/cookies/getCookie";
import {AppDispatch} from "../service";


export const postRefreshUserData = () => async (dispatch: AppDispatch) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.post(URL_UPDATE_TOKEN, {
            token: getCookie('refreshToken')
        })
        const data = response.data
        dispatch(updateTokens({accessToken: data.accessToken, refreshToken: data.refreshToken}))
    } catch (e) {
        dispatch(fetchDataError())
    }
}
