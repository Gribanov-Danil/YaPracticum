import {URL_LOGIN} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";

const {setFetchDataSuccess, fetchingData, fetchDataError} = userDataSlice.actions

export const postRegistration = (email, password) => async (dispatch) => {
    console.log(email, password)
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.post(URL_LOGIN, {
            email,
            password,
        })
        const data = response.data
        dispatch(setFetchDataSuccess({data}))
        return data
    } catch (e) {
        dispatch(fetchDataError())
    }
}
