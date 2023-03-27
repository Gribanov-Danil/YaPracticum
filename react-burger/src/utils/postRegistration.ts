import {URL_REGISTRATION} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {fetchDataError, fetchingData, setFetchDataSuccess} from "../service/reducers/userDataSlice";
import {AppDispatch} from "../service";


export const postRegistration = (email: string, password: string, name: string) => async (dispatch: AppDispatch) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.post(URL_REGISTRATION, {
                email: email,
                password: password,
                name: name
            });
        const data = response.data;
        dispatch(setFetchDataSuccess(data))
    } catch (e) {
        dispatch(fetchDataError())
    }
}
