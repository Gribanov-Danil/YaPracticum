import {AxiosRequestInstance, URL_INGREDIENTS} from "./constants/axiosInstance";
import {ingredientsSlice} from "../service/reducers/ingredientsSlice";
import {AnyAction, Dispatch} from "redux";

const {setFetchDataSuccess, fetchingData, fetchDataError} = ingredientsSlice.actions

export const getIngredientsData = () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchingData())
    try {
        const response = await AxiosRequestInstance.get(URL_INGREDIENTS)
        const data = response.data
        dispatch(setFetchDataSuccess(data.data))
    } catch (e) {
        dispatch(fetchDataError())
    }
}