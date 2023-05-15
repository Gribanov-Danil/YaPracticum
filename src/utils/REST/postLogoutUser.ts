import { URL_LOGOUT } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { createAsyncThunk } from "@reduxjs/toolkit"

export type TPostLogoutResponse = {
  message: string
  success: boolean
}

/**
 * POST запрос разлогинивающий пользователя
 * @param token refreshToken пользователя
 *
 * @return {TPostLogoutResponse} TPostLogoutResponse
 */
export const postLogout = createAsyncThunk<
  TPostLogoutResponse,
  { token: string },
  { rejectValue: string }
>("postLogout", async ({ token }, { rejectWithValue }) => {
  try {
    const response = await AxiosRequestInstance.post<TPostLogoutResponse>(URL_LOGOUT, {
      token,
    })
    return response.data
  } catch (e) {
    return rejectWithValue("Ошибка выхода")
  }
})
