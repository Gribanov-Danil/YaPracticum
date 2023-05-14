import { URL_AUTH_USER } from "../constants/axios-instance"
import { AxiosRequestInstance } from "../constants/axios-instance"
import { fetchDataError, updateUser } from "../../service/reducers/user-data-slice/user-data-slice"
import { getCookie } from "../../service/cookies/getCookie"
import { postRefreshUserData } from "./postRefreshUserData"
import { TAppDispatch } from "../../service/store"
import { TUserResponse } from "../models/redux-types/types"
import { createAsyncThunk } from "@reduxjs/toolkit"

/**
 *  GET запрос, возвращающий TUserResponse в случае успеха
 */
export const getAuthUser = createAsyncThunk("getAuthUser", async (_, { dispatch }) => {
  try {
    const response = await AxiosRequestInstance.get<TUserResponse>(URL_AUTH_USER, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
    const data = response.data
    dispatch(updateUser(data.user))
    return data
  } catch (e) {
    try {
      await dispatch(postRefreshUserData())
      const response = await AxiosRequestInstance.get<TUserResponse>(URL_AUTH_USER, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      })
      return response.data
    } catch (e) {
      dispatch(fetchDataError())
    }
  }
})

/**
 * PATCH запрос, возвращающий TUserResponse в случае успеха
 * @param name имя пользователя
 * @param email email пользователя
 * @param password пароль пользователя
 */
export const patchAuthUser =
  (name: string, email: string, password: string) => async (dispatch: TAppDispatch) => {
    try {
      const response = await AxiosRequestInstance.patch<TUserResponse>(
        URL_AUTH_USER,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("token"),
          },
        },
      )
      const data = response.data
      dispatch(updateUser(data.user))
      return response.data
    } catch (e) {
      dispatch(fetchDataError())
    }
  }
