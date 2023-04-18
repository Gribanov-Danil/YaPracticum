import { URL_UPDATE_TOKEN } from "./constants/axiosInstance"
import { AxiosRequestInstance } from "./constants/axiosInstance"
import { fetchDataError, updateTokens } from "../service/reducers/userDataSlice"
import { getCookie } from "../service/cookies/getCookie"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const postRefreshUserData = createAsyncThunk(
  "postRefreshUserData",
  async (_, { dispatch }) => {
    try {
      const response = await AxiosRequestInstance.post(URL_UPDATE_TOKEN, {
        token: getCookie("refreshToken"),
      })
      const data = response.data
      dispatch(updateTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken }))
    } catch (e) {
      dispatch(fetchDataError())
    }
  },
)
