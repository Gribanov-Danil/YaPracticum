import {URL_LOGIN} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";
import {AnyAction, Dispatch} from "redux";

const {setFetchDataSuccess, fetchingData, fetchDataError} = userDataSlice.actions

export const postAuth = (email: string, password: string) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.post(URL_LOGIN, {
            email,
            password,
        })
        const data = response.data
        const success = data.success
        dispatch(setFetchDataSuccess({data}))
        return success
    } catch (e) {
        dispatch(fetchDataError())
    }
}
