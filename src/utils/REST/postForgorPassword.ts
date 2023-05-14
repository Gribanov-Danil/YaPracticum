import { URL_FORGOT_PASSWORD } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { fetchDataError } from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"

export const postForgotPassword = (userEmail: string) => async (dispatch: TAppDispatch) => {
  try {
    const response = await AxiosRequestInstance.post(URL_FORGOT_PASSWORD, { email: userEmail })
    return response.data
  } catch (e) {
    dispatch(fetchDataError())
  }
}
