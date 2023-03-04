import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: {
        email: '',
        name: ''
    },
    accessToken: "",
    refreshToken: "",
    status: {
        isLoading: false,
        isError: false,
    }
}

export const userDataSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setFetchDataSuccess: (state, action) => {
            console.log(action)
            state.user.email = action.payload.data.user.email
            state.user.name = action.payload.data.user.name
            state.accessToken = action.payload.data.accessToken
            state.refreshToken = action.payload.data.refreshToken
            state.status.isLoading = false
            state.status.isError = false
        },
        fetchingData: (state) => {
            state.status.isLoading = true
        },
        fetchDataError: (state) => {
            state.status.isError = true
            state.status.isLoading = false
            state = initialState
        }
    }
})

export default userDataSlice.reducer