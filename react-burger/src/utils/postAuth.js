import {URL_LOGIN} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";

const {setFetchDataSuccess, fetchingData, fetchDataError} = userDataSlice.actions

export const postAuth = (email, password) => async (dispatch) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.post(URL_LOGIN, {
            email,
            password,
        })
        const data = response.data
        const success = data.success
        console.log(response.data)
        dispatch(setFetchDataSuccess({data}))
        return success
    } catch (e) {
        console.log(e)
        dispatch(fetchDataError(e.response.data))
    }
}
