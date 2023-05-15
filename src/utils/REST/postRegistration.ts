import { AxiosRequestInstance, URL_REGISTRATION } from "../constants/axios-instance"
import { TUser } from "../models/redux-types/types"
import { createAsyncThunk } from "@reduxjs/toolkit"

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
export const postRegistration = createAsyncThunk<
  TPostRegistrationResponse,
  { email: string; password: string; name: string },
  { success: boolean; rejectValue: string }
>("postRegistration", async function ({ email, password, name }, { dispatch, rejectWithValue }) {
  try {
    const response = await AxiosRequestInstance.post<TPostRegistrationResponse>(URL_REGISTRATION, {
      email: email,
      password: password,
      name: name,
    })
    return response.data
  } catch (e) {
    return rejectWithValue("Некорректная почта или пароль")
  }
})
