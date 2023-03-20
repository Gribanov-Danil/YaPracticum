import {createSlice} from "@reduxjs/toolkit";
import {IStatus} from "../../utils/interfaces";

type SliceState = {
    id: string
    status: IStatus
}

const initialState: SliceState = {
    id: '',
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
        updateId:(state, action) => {
            state.id = action.payload.id
            state.status.isError = false
            state.status.isLoading = false
        },
        deleteId: (state) => {
            state.id = ''
        }
    }
})

export default orderDetailsSlice.reducer