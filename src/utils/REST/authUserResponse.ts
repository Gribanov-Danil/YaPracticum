import { AxiosRequestInstance, URL_AUTH_USER } from "../constants/axios-instance"
import { getCookie } from "../../service/cookies/getCookie"
import { postRefreshUserData } from "./postRefreshUserData"
import { TUserResponse } from "../models/redux-types/types"
import { createAsyncThunk } from "@reduxjs/toolkit"

/**
 *  GET запрос, возвращающий TUserResponse в случае успеха
 *
 *  @return {TUserResponse} TUserResponse
 */
export const getAuthUser = createAsyncThunk<TUserResponse, {}, { rejectValue: string }>(
  "getAuthUser",
  async ({}, { dispatch, rejectWithValue }) => {
    try {
      const response = await AxiosRequestInstance.get<TUserResponse>(URL_AUTH_USER, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      })
      return response.data
    } catch (e) {
      try {
        await dispatch(postRefreshUserData({}))
        const response = await AxiosRequestInstance.get<TUserResponse>(URL_AUTH_USER, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("token")}`,
          },
        })
        return response.data
      } catch (e) {
        console.log(e)
        return rejectWithValue("Некорректная почта или пароль")
      }
    }
  },
)

/**
 * PATCH запрос, возвращающий TUserResponse в случае успеха
 * @param name имя пользователя
 * @param email email пользователя
 * @param password пароль пользователя
 */
export const patchAuthUser = createAsyncThunk<
  TUserResponse,
  { name: string; email: string; password: string },
  { success: boolean; rejectValue: string }
>("patchAuthUser", async ({ name, email, password }, { rejectWithValue }) => {
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
    return response.data
  } catch (e) {
    return rejectWithValue("Некорректная почта или пароль")
  }
})
