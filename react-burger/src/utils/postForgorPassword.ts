import { URL_FORGOT_PASSWORD } from "./constants/axiosInstance"
import { AxiosRequestInstance } from "./constants/axiosInstance"
import { fetchDataError } from "../service/reducers/userDataSlice"
import { TAppDispatch } from "../service/store"

export const postForgotPassword = (userEmail: string) => async (dispatch: TAppDispatch) => {
  try {
    const response = await AxiosRequestInstance.post(URL_FORGOT_PASSWORD, { email: userEmail })
    return response.data
  } catch (e) {
    dispatch(fetchDataError())
  }
}
