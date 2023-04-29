import {
  fetchDataError,
  fetchingData,
  logoutUser,
  setFetchDataSuccess,
  TUserData,
  TUserDataState,
  updateTokens,
  updateUser,
  userDataSlice,
} from "./user-data-slice"
import { getCookie } from "../../cookies/getCookie"

const initialState: TUserDataState = {
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
      payload: {},
    }
    const store = userDataSlice.reducer(initialState, action)
    expect(store).toStrictEqual(initialState)
    expect(getCookie("refreshToken")).toEqual("")
    expect(getCookie("token")).toEqual("")
  })
})
