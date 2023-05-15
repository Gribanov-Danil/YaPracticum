import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { setCookie } from "../../cookies/setCookie"
import { TStatus, TUser } from "../../../utils/models/redux-types/types"
import { getAuthUser } from "../../../utils/REST/authUserResponse"
import { postAuth } from "../../../utils/REST/postAuth"
import { postRegistration } from "../../../utils/REST/postRegistration"

export type TUserDataState = {
  user: TUser
  accessToken: string
  refreshToken: string
  status: TStatus
}

export const initialState: TUserDataState = {
  user: {
    email: "",
    name: "",
  },
  accessToken: "",
  refreshToken: "",
  status: {
    isLoading: false,
    isError: false,
  },
}

export type TUserData = Omit<TUserDataState, "status">

export const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchingData: (state) => {
      state.status.isLoading = true
    },
    fetchDataError: (state) => {
      state.status.isError = true
      state.status.isLoading = false
    },
    updateTokens: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
      state.accessToken = action.payload.accessToken.split("Bearer ")[1]
      setCookie("token", action.payload.accessToken.split("Bearer ")[1])
      state.refreshToken = action.payload.refreshToken
      setCookie("refreshToken", action.payload.refreshToken)
    },
    updateUser: (state, action: PayloadAction<TUser>) => {
      state.user.email = action.payload.email
      state.user.name = action.payload.name
    },
    logoutUser: (state) => {
      state.accessToken = ""
      setCookie("token", "", { expires: 1 })
      state.refreshToken = ""
      setCookie("refreshToken", "", { expires: 1 })
      state.user = initialState.user
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAuthUser.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(getAuthUser.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })
      .addCase(getAuthUser.fulfilled, (state) => {
        state.status.isError = false
        state.status.isLoading = false
      })
      .addCase(postAuth.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(postAuth.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })
      .addCase(postAuth.fulfilled, (state, action) => {
        state.user = action.payload.user
        setCookie("token", action.payload.accessToken.split("Bearer ")[1])
        setCookie("refreshToken", action.payload.refreshToken)
        state.status.isLoading = false
        state.status.isError = false
      })
      .addCase(postRegistration.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(postRegistration.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })
      .addCase(postRegistration.fulfilled, (state, action) => {
        state.user = action.payload.user
        setCookie("token", action.payload.accessToken.split("Bearer ")[1])
        setCookie("refreshToken", action.payload.refreshToken)
        state.status.isLoading = false
        state.status.isError = false
      })
  },
})

export const { fetchingData, fetchDataError, updateTokens, updateUser, logoutUser } =
  userDataSlice.actions
