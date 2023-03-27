import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IIngredient, IStatus} from "../../utils/interfaces";

export type IngredientsSliceState = {
    dataArray: IIngredient[]
    status: IStatus
}

const initialState: IngredientsSliceState = {
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
        setFetchDataSuccess: (state, action:PayloadAction<IIngredient[]>) => {
            state.dataArray = action.payload
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