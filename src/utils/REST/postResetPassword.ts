import { URL_PASSWORD_RESET } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { fetchDataError } from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"

type TPostResetPassword = {
  message: string
  success: boolean
}

/**
 * POST запрос, возвращающий TPostResetPassword в случае успеха
 * @param password новый пароль пользователя
 * @param token токен подтверждения смены пароля
 * @return {TPostResetPassword} TPostResetPassword
 */
export const postResetPassword =
  (password: string, token: string) => async (dispatch: TAppDispatch) => {
    try {
      const response = await AxiosRequestInstance.post<TPostResetPassword>(URL_PASSWORD_RESET, {
        password: password,
        token: token,
      })
      return response.data
    } catch (e) {
      dispatch(fetchDataError())
    }
  }
