import { URL_LOGOUT } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import {
  fetchDataError,
  fetchingData,
  logoutUser,
} from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"

export type TPostLogoutResponse = {
  message: string
  success: boolean
}

/**
 * POST запрос разлогинивающий пользователя
 * @param token refreshToken пользователя
 *
 * @return {TPostLogoutResponse} TPostLogoutResponse
 */
export const postLogout = (token: string) => async (dispatch: TAppDispatch) => {
  dispatch(fetchingData())
  try {
    const response = await AxiosRequestInstance.post<TPostLogoutResponse>(URL_LOGOUT, {
      token,
    })
    dispatch(logoutUser())
    return response.data
  } catch (e) {
    dispatch(fetchDataError())
  }
}
