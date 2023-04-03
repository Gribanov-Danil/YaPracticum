import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TIngredient } from "../../utils/models/ingredient-types/types"
import { TStatus } from "../../utils/models/redux-types/types"

export type IngredientsSliceState = {
  dataArray: TIngredient[]
  status: TStatus
}

const initialState: IngredientsSliceState = {
  dataArray: [],
  status: {
    isLoading: false,
    isError: false,
  },
}

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setFetchDataSuccess: (state, action: PayloadAction<TIngredient[]>) => {
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
    },
  },
})

export const { setFetchDataSuccess, fetchingData, fetchDataError } = ingredientsSlice.actions
