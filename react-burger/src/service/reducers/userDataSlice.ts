import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {setCookie} from "../cookies/setCookie";
import { IStatus, IUser} from "../../utils/interfaces";

export type TUserDataState = {
    user: IUser
    accessToken: string
    refreshToken: string
    status: IStatus
}

const initialState: TUserDataState = {
    user: {
        email: '',
        name: ''
    },
    accessToken: "",
    refreshToken: "",
    status: {
        isLoading: false,
        isError: false,
    },
}

export const userDataSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setFetchDataSuccess: (state, action:PayloadAction<TUserDataState>) => {
            state.user.email = action.payload.user.email
            state.user.name = action.payload.user.name
            state.accessToken = action.payload.accessToken
            setCookie('token', action.payload.accessToken.split('Bearer ')[1])
            state.refreshToken = action.payload.refreshToken
            setCookie('refreshToken', action.payload.refreshToken)
            state.status.isLoading = false
            state.status.isError = false
        },
        fetchingData: (state) => {
            state.status.isLoading = true
        },
        fetchDataError: (state) => {
            state.status.isError = true
            state.status.isLoading = false
        },
        updateTokens: (state, action: PayloadAction<{accessToken: string, refreshToken: string}>) => {
            setCookie('token', action.payload.accessToken.split('Bearer ')[1])
            setCookie('refreshToken', action.payload.refreshToken)
        },
        updateUser: (state, action: PayloadAction<IUser>) => {
            state.user.email = action.payload.email
            state.user.name = action.payload.name
        },
        logoutUser: (state) => {
            state.accessToken = ""
            setCookie('token', "", {expires: 1})
            state.refreshToken = ""
            setCookie('refreshToken', "", {expires: 1})
            state.user = initialState.user
        },
    }
})

export const {setFetchDataSuccess, fetchingData, fetchDataError, updateTokens, updateUser, logoutUser} = userDataSlice.actions