import { URL_FORGOT_PASSWORD } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { createAsyncThunk } from "@reduxjs/toolkit"

type TPostForgotPasswordResponse = {
  message: string
  success: boolean
}

/**
 * POST запрос, возвращающий TPostForgotPasswordResponse в случае успеха
 * @param userEmail email пользователя
 *
 * @return {TPostForgotPasswordResponse} TPostForgotPasswordResponse
 */
export const postForgotPassword = createAsyncThunk<
  TPostForgotPasswordResponse,
  { userEmail: string },
  { rejectValue: string }
>("postForgotPassword", async ({ userEmail }, { rejectWithValue }) => {
  try {
    const response = await AxiosRequestInstance.post<TPostForgotPasswordResponse>(
      URL_FORGOT_PASSWORD,
      { email: userEmail },
    )
    return response.data
  } catch (e) {
    return rejectWithValue("Некорректная почта или пароль")
  }
})
