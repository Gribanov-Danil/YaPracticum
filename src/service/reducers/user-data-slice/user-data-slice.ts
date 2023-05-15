import { createSlice } from "@reduxjs/toolkit"
import { setCookie } from "../../cookies/setCookie"
import { TStatus, TUser } from "../../../utils/models/redux-types/types"
import { getAuthUser, patchAuthUser } from "../../../utils/REST/authUserResponse"
import { postAuth } from "../../../utils/REST/postAuth"
import { postRegistration } from "../../../utils/REST/postRegistration"
import { postForgotPassword } from "../../../utils/REST/postForgorPassword"
import { postLogout } from "../../../utils/REST/postLogoutUser"
import { postResetPassword } from "../../../utils/REST/postResetPassword"
import { postRefreshUserData } from "../../../utils/REST/postRefreshUserData"

export type TUserDataState = {
  user: TUser
  status: TStatus
}

export const initialState: TUserDataState = {
  user: {
    email: "",
    name: "",
  },
  status: {
    isLoading: false,
    isError: false,
  },
}

export type TUserData = Omit<TUserDataState, "status">

export const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAuthUser.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(getAuthUser.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })
      .addCase(getAuthUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.status.isError = false
        state.status.isLoading = false
      })

      .addCase(patchAuthUser.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(patchAuthUser.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })
      .addCase(patchAuthUser.fulfilled, (state, action) => {
        state.user = action.payload.user
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

      .addCase(postForgotPassword.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(postForgotPassword.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })

      .addCase(postLogout.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(postLogout.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })
      .addCase(postLogout.fulfilled, (state) => {
        setCookie("token", "", { expires: 1 })
        setCookie("refreshToken", "", { expires: 1 })
        state.user = initialState.user
        state.status.isError = false
        state.status.isLoading = false
      })

      .addCase(postResetPassword.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(postResetPassword.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })

      .addCase(postRefreshUserData.pending, (state) => {
        state.status.isLoading = true
      })
      .addCase(postRefreshUserData.rejected, (state) => {
        state.status.isError = true
        state.status.isLoading = false
      })
      .addCase(postRefreshUserData.fulfilled, (state, action) => {
        setCookie("token", action.payload.accessToken.split("Bearer ")[1])
        setCookie("refreshToken", action.payload.refreshToken)
        state.status.isError = false
        state.status.isLoading = false
      })
  },
})
