import {URL_AUTH_USER} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";
import {getCookie} from "../service/cookies/getCookie";
import {postRefreshUserData} from "./postRefreshUserData";
import {AnyAction, Dispatch} from "redux";

const {fetchingData, updateUser, fetchDataError} = userDataSlice.actions

export const getAuthUser = () => async (dispatch: Dispatch<AnyAction>) => {
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
            // TODO ts-ignore
            // @ts-ignore
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

export const patchAuthUser = (name: string, email: string, password: string) => async (dispatch: Dispatch<AnyAction>) => {
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
