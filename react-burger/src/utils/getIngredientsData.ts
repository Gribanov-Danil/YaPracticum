import { AxiosRequestInstance, URL_INGREDIENTS } from "./constants/axiosInstance"
import {
  fetchDataError,
  fetchingData,
  setFetchDataSuccess,
} from "../service/reducers/ingredientsSlice"
import { AppDispatch } from "../service/store"
import { TIngredientsResponse } from "./models/redux-types/types"

export const getIngredientsData = () => async (dispatch: AppDispatch) => {
  dispatch(fetchingData())
  try {
    const response = await AxiosRequestInstance.get<TIngredientsResponse>(URL_INGREDIENTS)
    const data = response.data
    dispatch(setFetchDataSuccess(data.data))
  } catch (e) {
    dispatch(fetchDataError())
  }
}
