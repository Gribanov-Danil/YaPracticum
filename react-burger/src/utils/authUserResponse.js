import {URL_AUTH_USER} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";
import {getCookie} from "../service/cookies/getCookie";
import {postRefreshUserData} from "./postRefreshUserData";

const {fetchingData, updateUser} = userDataSlice.actions

export const getAuthUser = () => async (dispatch) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.get(URL_AUTH_USER, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('token')}`
            }
        })
        const data = response.data
        dispatch(updateUser({data}))
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
            console.log(e)
        }
    }
}

//TODO сделать патч запрос
export const patchAuthUser = (name, email, password) => async (dispatch) => {
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
        dispatch(updateUser({data}))
        return response.data
    } catch (e) {
        console.log(e)
    }
}
