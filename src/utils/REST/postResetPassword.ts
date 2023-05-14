import { URL_PASSWORD_RESET } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { fetchDataError } from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"

export const postResetPassword =
  (password: string, token: string) => async (dispatch: TAppDispatch) => {
    try {
      const response = await AxiosRequestInstance.post(URL_PASSWORD_RESET, {
        password: password,
        token: token,
      })
      return response.data
    } catch (e) {
      dispatch(fetchDataError())
    }
  }
