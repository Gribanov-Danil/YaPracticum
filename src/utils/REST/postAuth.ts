import { AxiosRequestInstance, URL_LOGIN } from "../constants/axios-instance"
import { TUser } from "../models/redux-types/types"
import { createAsyncThunk } from "@reduxjs/toolkit"

export type TPostAuthResponse = {
  accessToken: string
  refreshToken: string
  success: boolean
  user: TUser
}

export const postAuth = createAsyncThunk<
  TPostAuthResponse,
  { email: string; password: string },
  { success: boolean; rejectValue: string }
>("postAuth", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AxiosRequestInstance.post<TPostAuthResponse>(URL_LOGIN, {
      email,
      password,
    })
    return response.data
  } catch (e) {
    return rejectWithValue("Некорректная почта или пароль")
  }
})
