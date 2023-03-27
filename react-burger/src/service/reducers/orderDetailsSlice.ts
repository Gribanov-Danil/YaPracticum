import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IStatus} from "../../utils/interfaces";

export type TOrderDetailsState = {
    id: number | undefined
    status: IStatus
}

const initialState: TOrderDetailsState = {
    id: undefined,
    status: {
        isError: false,
        isLoading: false
    }
}

export const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers:{
        fetchDataProcessing: (state) => {
            state.status.isLoading = true
        },
        fetchDataError: (state) => {
            state.status.isError = true
            state.status.isLoading = false
            state = initialState
        },
        updateId:(state, action: PayloadAction<number>) => {
            state.id = action.payload
            state.status.isError = false
            state.status.isLoading = false
        },
        deleteId: (state) => {
            state.id = undefined
        }
    }
})

export default orderDetailsSlice.reducer