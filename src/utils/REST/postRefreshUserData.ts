import { URL_UPDATE_TOKEN } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { getCookie } from "../../service/cookies/getCookie"
import { createAsyncThunk } from "@reduxjs/toolkit"

type TPostRefreshUserResponse = {
  accessToken: string
  refreshToken: string
  success: boolean
}

/**
 * POST запрос, обновляющий token пользователя
 */
export const postRefreshUserData = createAsyncThunk<
  TPostRefreshUserResponse,
  {},
  { rejectValue: string }
>("postRefreshUserData", async ({}, { rejectWithValue }) => {
  try {
    const response = await AxiosRequestInstance.post<TPostRefreshUserResponse>(URL_UPDATE_TOKEN, {
      token: getCookie("refreshToken"),
    })
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue("Некорректная почта или пароль")
  }
})
