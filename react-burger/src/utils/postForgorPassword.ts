import { URL_FORGOT_PASSWORD } from "./constants/axiosInstance"
import { AxiosRequestInstance } from "./constants/axiosInstance"
import { fetchDataError } from "../service/reducers/userDataSlice"
import { AppDispatch } from "../service/store"

export const postForgotPassword = (userEmail: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await AxiosRequestInstance.post(URL_FORGOT_PASSWORD, { email: userEmail })
    return response.data
  } catch (e) {
    dispatch(fetchDataError())
  }
}
