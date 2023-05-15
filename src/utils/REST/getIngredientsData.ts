import { AxiosRequestInstance, URL_INGREDIENTS } from "../constants/axios-instance"
import {
  fetchDataError,
  fetchingData,
  setFetchDataSuccess,
} from "../../service/reducers/ingredients-slice/ingredients-slice"
import { TAppDispatch } from "../../service/store"
import { TIngredientsResponse } from "../models/redux-types/types"

/**
 * GET запрос, сохраняющий полученные ингредиенты в ingredients в случае успеха
 */
export const getIngredientsData = () => async (dispatch: TAppDispatch) => {
  dispatch(fetchingData())
  try {
    const response = await AxiosRequestInstance.get<TIngredientsResponse>(URL_INGREDIENTS)
    const data = response.data
    dispatch(setFetchDataSuccess(data.data))
  } catch (e) {
    dispatch(fetchDataError())
  }
}
