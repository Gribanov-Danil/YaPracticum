import { URL_REGISTRATION } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import {
  fetchDataError,
  fetchingData,
  setFetchDataSuccess,
} from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"
import { TUser } from "../models/redux-types/types"

type TPostRegistrationResponse = {
  user: TUser
  success: boolean
  accessToken: string
  refreshToken: string
}

/**
 * POST запрос, регистрирующий нового пользователя
 * @param email email нового пользователя
 * @param password пароль нового пользователя
 * @param name имя нового пользователя
 */
export const postRegistration =
  (email: string, password: string, name: string) => async (dispatch: TAppDispatch) => {
    dispatch(fetchingData())
    try {
      const response = await AxiosRequestInstance.post<TPostRegistrationResponse>(
        URL_REGISTRATION,
        {
          email: email,
          password: password,
          name: name,
        },
      )
      const data = response.data
      dispatch(setFetchDataSuccess(data))
    } catch (e) {
      dispatch(fetchDataError())
    }
  }
