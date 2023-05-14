import { URL_REGISTRATION } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import {
  fetchDataError,
  fetchingData,
  setFetchDataSuccess,
} from "../../service/reducers/user-data-slice/user-data-slice"
import { TAppDispatch } from "../../service/store"

export const postRegistration =
  (email: string, password: string, name: string) => async (dispatch: TAppDispatch) => {
    dispatch(fetchingData())
    try {
      const response = await AxiosRequestInstance.post(URL_REGISTRATION, {
        email: email,
        password: password,
        name: name,
      })
      const data = response.data
      dispatch(setFetchDataSuccess(data))
    } catch (e) {
      dispatch(fetchDataError())
    }
  }
