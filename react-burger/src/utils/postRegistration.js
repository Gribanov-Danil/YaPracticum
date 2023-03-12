import {URL_REGISTRATION} from "./constants/axiosInstance";
import {AxiosRequestInstance} from "./constants/axiosInstance";
import {userDataSlice} from "../service/reducers/userDataSlice";

const {setFetchDataSuccess, fetchingData, fetchDataError} = userDataSlice.actions

export const postRegistration = (email, password, name) => async (dispatch) => {
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
