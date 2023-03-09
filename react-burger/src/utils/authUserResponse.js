import {URL_AUTH_USER} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";
import {getCookie} from "../service/cookies/getCookie";
import {postRefreshUserData} from "./postRefreshUserData";

const {fetchingData} = userDataSlice.actions

export const getAuthUser = () => async (dispatch) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.get(URL_AUTH_USER, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('token')}`
            }
        })
        return response.data.success
    } catch (e) {
        try {
            await dispatch(postRefreshUserData())
            const response = await AxiosRequestInstance.get(URL_AUTH_USER, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getCookie('token')}`
                }
            })
            return response.data.success;
        }
        catch (e) {
            console.log(e)
        }
    }
}

//TODO сделать патч запрос
export const patchAuthUser = async () => {
    try {
        console.log("patch")
        console.log(document.cookie)
        const response = await AxiosRequestInstance.patch(URL_AUTH_USER, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getCookie('token')
            }
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}
