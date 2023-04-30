import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TStatus } from "../../../utils/models/redux-types/types"

export type TOrderDetailsState = {
  id: number | undefined
  status: TStatus
}

export const initialState: TOrderDetailsState = {
  id: undefined,
  status: {
    isError: false,
    isLoading: false,
  },
}

export const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    fetchDataProcessing: (state) => {
      state.status.isLoading = true
    },
    fetchDataError: (state) => {
      state.status.isError = true
      state.status.isLoading = false
      state = initialState
    },
    updateId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
      state.status.isError = false
      state.status.isLoading = false
    },
    deleteId: (state) => {
      state.id = undefined
    },
  },
})

export const { fetchDataProcessing, fetchDataError, updateId, deleteId } = orderDetailsSlice.actions
