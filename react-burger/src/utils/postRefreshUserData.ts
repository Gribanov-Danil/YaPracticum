import {URL_UPDATE_TOKEN} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";
import {getCookie} from "../service/cookies/getCookie";
import {AnyAction, Dispatch} from "redux";

const {updateTokens, fetchingData, fetchDataError} = userDataSlice.actions

export const postRefreshUserData = () => async (dispatch:  Dispatch<AnyAction>) => {
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
