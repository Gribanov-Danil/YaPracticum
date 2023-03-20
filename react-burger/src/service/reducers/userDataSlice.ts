import {createSlice} from "@reduxjs/toolkit";
import {setCookie} from "../cookies/setCookie";
import { IStatus, IUser} from "../../utils/interfaces";

type SliceState = {
    user: IUser
    accessToken: string
    refreshToken: string
    status: IStatus
}

const initialState: SliceState = {
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
        setFetchDataSuccess: (state, action) => {
            state.user.email = action.payload.data.user.email
            state.user.name = action.payload.data.user.name
            state.accessToken = action.payload.data.accessToken
            setCookie('token', action.payload.data.accessToken.split('Bearer ')[1])
            state.refreshToken = action.payload.data.refreshToken
            setCookie('refreshToken', action.payload.data.refreshToken)
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
        updateTokens: (state, action) => {
            setCookie('token', action.payload.data.accessToken.split('Bearer ')[1])
            setCookie('refreshToken', action.payload.data.refreshToken)
        },
        updateUser: (state, action) => {
            state.user.email = action.payload.data.user.email
            state.user.name = action.payload.data.user.name
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

export default userDataSlice.reducer