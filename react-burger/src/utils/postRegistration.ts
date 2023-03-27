import {URL_REGISTRATION} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";
import {AnyAction, Dispatch} from "redux";

const {setFetchDataSuccess, fetchingData, fetchDataError} = userDataSlice.actions

export const postRegistration = (email: string, password: string, name: string) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.post(URL_REGISTRATION, {
                email: email,
                password: password,
                name: name
            });
        const data = response.data;
        dispatch(setFetchDataSuccess({data}))
    } catch (e) {
        dispatch(fetchDataError())
    }
}
