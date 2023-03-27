import {URL_AUTH_USER} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {fetchDataError, fetchingData, updateUser} from "../service/reducers/userDataSlice";
import {getCookie} from "../service/cookies/getCookie";
import {postRefreshUserData} from "./postRefreshUserData";
import {AppDispatch} from "../service";


export const getAuthUser = () => async (dispatch: AppDispatch) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.get(URL_AUTH_USER, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('token')}`
            }
        })
        const data = response.data
        dispatch(updateUser(data.user))
        return data;
    } catch (e) {
        try {
            await dispatch(postRefreshUserData())
            const response = await AxiosRequestInstance.get(URL_AUTH_USER, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getCookie('token')}`
                }
            })
            return response.data;
        }
        catch (e) {
            dispatch(fetchDataError())
        }
    }
}

export const patchAuthUser = (name: string, email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await AxiosRequestInstance.patch(URL_AUTH_USER,
            {
                name,
                email,
                password
            },
            {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getCookie('token')
            }
        })
        const data = response.data
        dispatch(updateUser(data.user))
        return response.data
    } catch (e) {
        dispatch(fetchDataError())
    }
}
