import {
  fetchDataError,
  fetchingData,
  initialState,
  logoutUser,
  setFetchDataSuccess,
  TUserData,
  updateTokens,
  updateUser,
  userDataSlice,
} from "./user-data-slice"
import { getCookie } from "../../cookies/getCookie"
import { getAuthUser } from "../../../utils/authUserResponse"

describe("user", () => {
  it("should set user information and cookies", () => {
    const payload: TUserData = {
      user: {
        email: "test@test.ru",
        name: "superBulk",
      },
      accessToken: "Bearer abcc",
      refreshToken: "ccba",
    }
    const action = {
      type: setFetchDataSuccess.type,
      payload,
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store).toStrictEqual({
      ...payload,
      accessToken: "abcc",
      status: { isLoading: false, isError: false },
    })
    expect(getCookie("refreshToken")).toEqual("ccba")
    expect(getCookie("token")).toEqual("abcc")
  })

  it("should make status.isLoading true when user data is fetching", () => {
    const action = { type: fetchingData.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isLoading).toBe(true)
  })

  it("should make status.isError true when fetching was end with error", () => {
    const action = { type: fetchDataError.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status.isError).toBe(true)
  })

  it("should update token and cookies", () => {
    const action = {
      type: updateTokens.type,
      payload: { accessToken: "Bearer abcc", refreshToken: "ccba" },
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.accessToken).toStrictEqual("abcc")
    expect(store.refreshToken).toStrictEqual("ccba")
    expect(getCookie("refreshToken")).toEqual("ccba")
    expect(getCookie("token")).toEqual("abcc")
  })

  it("should update user data", () => {
    const action = {
      type: updateUser.type,
      payload: { email: "test@test.ru", name: "superBulk" },
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.user).toStrictEqual({ email: "test@test.ru", name: "superBulk" })
  })

  it("should logout user", () => {
    const action = {
      type: logoutUser.type,
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store).toStrictEqual(initialState)
    expect(getCookie("refreshToken")).toEqual("")
    expect(getCookie("token")).toEqual("")
  })

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
    const action = { type: getAuthUser.fulfilled.type }
    const store = userDataSlice.reducer(initialState, action)
    expect(store.status).toStrictEqual(initialState.status)
  })
})
