import { URL_FORGOT_PASSWORD } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { fetchDataError } from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"

type TPostForgotPasswordResponse = {
  message: string
  success: boolean
}

/**
 * POST запрос, возвращающий TPostForgotPasswordResponse в случае успеха
 * @param userEmail email пользователя
 *
 * @return {TPostForgotPasswordResponse} TPostForgotPasswordResponse
 */
export const postForgotPassword = (userEmail: string) => async (dispatch: TAppDispatch) => {
  try {
    const response = await AxiosRequestInstance.post<TPostForgotPasswordResponse>(
      URL_FORGOT_PASSWORD,
      { email: userEmail },
    )
    return response.data
  } catch (e) {
    dispatch(fetchDataError())
  }
}
