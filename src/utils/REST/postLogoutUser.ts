import { URL_LOGOUT } from "../constants/axiosInstance"
import { AxiosRequestInstance } from "../constants/axiosInstance"
import {
  fetchDataError,
  fetchingData,
  logoutUser,
} from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"

export const postLogout = (token: string) => async (dispatch: TAppDispatch) => {
  dispatch(fetchingData())
  try {
    const response = await AxiosRequestInstance.post(URL_LOGOUT, {
      token,
    })
    dispatch(logoutUser())
    return response.data
  } catch (e) {
    dispatch(fetchDataError())
  }
}
