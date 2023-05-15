import { initialState, userDataSlice } from "./user-data-slice"
import { getCookie } from "../../cookies/getCookie"
import { getAuthUser, patchAuthUser } from "../../../utils/REST/authUserResponse"
import { postLogout } from "../../../utils/REST/postLogoutUser"
import { postRefreshUserData } from "../../../utils/REST/postRefreshUserData"
import { postAuth, TPostAuthResponse } from "../../../utils/REST/postAuth"
import { postForgotPassword } from "../../../utils/REST/postForgorPassword"
import { postResetPassword } from "../../../utils/REST/postResetPassword"
import { postRegistration, TPostRegistrationResponse } from "../../../utils/REST/postRegistration"

describe("user", () => {
  // Тестирование postAuth
  it("should make status.isLoading true when authentication is pending", () => {
    const action = { type: postAuth.pending.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when authentication was rejected", () => {
    const action = { type: postAuth.rejected.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should set user information and cookies on authentication", () => {
    const payload: TPostAuthResponse = {
      user: {
        email: "test@test.ru",
        name: "superBulk",
      },
      accessToken: "Bearer abcc",
      refreshToken: "ccba",
      success: true,
    }
    const action = {
      type: postAuth.fulfilled.type,
      payload,
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store).toStrictEqual({
      user: {
        email: "test@test.ru",
        name: "superBulk",
      },
      status: {
        isLoading: false,
        isError: false,
      },
    })
    expect(getCookie("refreshToken")).toEqual("ccba")
    expect(getCookie("token")).toEqual("abcc")
  })

  // Тестирование postRefreshUserData
  it("should make status.isLoading true when token is updating", () => {
    const action = { type: postRefreshUserData.pending.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when token update was rejected", () => {
    const action = { type: postRefreshUserData.rejected.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should update token and cookies", () => {
    expect(getCookie("refreshToken")).toEqual("ccba")
    expect(getCookie("token")).toEqual("abcc")
  })

  // Тестирование patchAuthUser
  it("should make status.isLoading true when user data is updating", () => {
    const action = { type: patchAuthUser.pending.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when update was rejected", () => {
    const action = { type: patchAuthUser.rejected.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should update user data", () => {
    const action = {
      type: patchAuthUser.fulfilled.type,
      payload: { user: { email: "test@test.ru", name: "superBulk" } },
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.user).toStrictEqual({ email: "test@test.ru", name: "superBulk" })
  })

  // Тестирование postLogout
  it("should make status.isLoading true when user is logOuting", () => {
    const action = { type: postLogout.pending.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when logout was rejected", () => {
    const action = { type: postLogout.rejected.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should logout user", () => {
    const action = {
      type: postLogout.fulfilled.type,
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store).toStrictEqual(initialState)
    expect(getCookie("refreshToken")).toEqual("")
    expect(getCookie("token")).toEqual("")
  })

  // Тестирование getAuthUser
  it("should make status.isLoading true when user data is pending", () => {
    const action = { type: getAuthUser.pending.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when fetching was rejected", () => {
    const action = { type: getAuthUser.rejected.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should make initial status true when fetching was fulfilled", () => {
    const payload: TPostAuthResponse = {
      user: {
        email: "test@test.ru",
        name: "superBulk",
      },
      accessToken: "Bearer abcc",
      refreshToken: "ccba",
      success: true,
    }
    const action = {
      type: getAuthUser.fulfilled.type,
      payload,
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store).toStrictEqual({
      user: {
        email: "test@test.ru",
        name: "superBulk",
      },
      status: {
        isLoading: false,
        isError: false,
      },
    })
  })

  // Тестирование postForgotPassword
  it("should make status.isLoading true forgot password response is pending", () => {
    const action = { type: postForgotPassword.pending.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when forgot password response was rejected", () => {
    const action = { type: postForgotPassword.rejected.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  // Тестирование postResetPassword
  it("should make status.isLoading true when reset password response is pending", () => {
    const action = { type: postResetPassword.pending.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when reset password response was rejected", () => {
    const action = { type: postResetPassword.rejected.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  // Тестирование postRegistration
  it("should make status.isLoading true when registration response is pending", () => {
    const action = { type: postRegistration.pending.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when registration response was rejected", () => {
    const action = { type: postRegistration.rejected.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should set user information and cookies on registration", () => {
    const payload: TPostRegistrationResponse = {
      user: {
        email: "test@test.ru",
        name: "superBulk",
      },
      accessToken: "Bearer abcc",
      refreshToken: "ccba",
      success: true,
    }
    const action = {
      type: postRegistration.fulfilled.type,
      payload,
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store).toStrictEqual({
      user: {
        email: "test@test.ru",
        name: "superBulk",
      },
      status: {
        isLoading: false,
        isError: false,
      },
    })
    expect(getCookie("refreshToken")).toEqual("ccba")
    expect(getCookie("token")).toEqual("abcc")
  })
})
