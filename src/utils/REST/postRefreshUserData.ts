import { URL_UPDATE_TOKEN } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import {
  fetchDataError,
  updateTokens,
} from "../../service/reducers/user-data-slice/user-data-slice"
import { getCookie } from "../../service/cookies/getCookie"
import { createAsyncThunk } from "@reduxjs/toolkit"

/**
 * POST запрос, обновляющий token пользователя
 */
export const postRefreshUserData = createAsyncThunk(
  "postRefreshUserData",
  async (_, { dispatch }) => {
    try {
      const response = await AxiosRequestInstance.post(URL_UPDATE_TOKEN, {
        token: getCookie("refreshToken"),
      })
      console.log(response)
      const data = response.data
      dispatch(updateTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken }))
    } catch (e) {
      dispatch(fetchDataError())
    }
  },
)
