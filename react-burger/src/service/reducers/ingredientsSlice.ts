import {createSlice} from "@reduxjs/toolkit";
import {IIngredient, IStatus} from "../../utils/interfaces";

type SliceState = {
    dataArray: IIngredient[]
    status: IStatus
}

const initialState: SliceState = {
    dataArray: [],
    status: {
        isLoading: false,
        isError: false,
    }
}

export const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        setFetchDataSuccess: (state, action) => {
            state.dataArray = action.payload.dataArray
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

export default ingredientsSlice.reducer