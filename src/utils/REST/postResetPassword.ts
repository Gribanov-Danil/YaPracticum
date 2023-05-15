import { URL_PASSWORD_RESET } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { createAsyncThunk } from "@reduxjs/toolkit"

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
export const postResetPassword = createAsyncThunk<
  TPostResetPassword,
  { password: string; token: string },
  { rejectValue: string }
>("postResetPassword", async ({ token, password }, { rejectWithValue }) => {
  try {
    const response = await AxiosRequestInstance.post<TPostResetPassword>(URL_PASSWORD_RESET, {
      password: password,
      token: token,
    })
    return response.data
  } catch (e) {
    return rejectWithValue("Некорректная почта или пароль")
  }
})
