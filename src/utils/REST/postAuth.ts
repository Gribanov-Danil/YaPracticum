import { URL_LOGIN } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import {
  fetchDataError,
  fetchingData,
  setFetchDataSuccess,
} from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"
import { TUser } from "../models/redux-types/types"

type TPostAuthResponse = {
  accessToken: string
  refreshToken: string
  success: boolean
  user: TUser
}

/**
 * POST запрос для авторизации пользователя, возвращающий success в случае успеха
 * @param email email пользователя
 * @param password пароль пользователя
 *
 * @return {success} success
 */
export const postAuth = (email: string, password: string) => async (dispatch: TAppDispatch) => {
  dispatch(fetchingData())
  try {
    const response = await AxiosRequestInstance.post<TPostAuthResponse>(URL_LOGIN, {
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
