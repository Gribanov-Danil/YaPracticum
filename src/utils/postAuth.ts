import { URL_LOGIN } from "./constants/axiosInstance"
import { AxiosRequestInstance } from "./constants/axiosInstance"
import {
  fetchDataError,
  fetchingData,
  setFetchDataSuccess,
} from "../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../service/store"

export const postAuth = (email: string, password: string) => async (dispatch: TAppDispatch) => {
  dispatch(fetchingData())
  try {
    const response = await AxiosRequestInstance.post(URL_LOGIN, {
      email,
      password,
    })
    const data = response.data
    const success = data.success
    dispatch(setFetchDataSuccess(data))
    return success
  } catch (e) {
    dispatch(fetchDataError())
  }
}
