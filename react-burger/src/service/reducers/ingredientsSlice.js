import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    dataArray: [],
    isLoading: false
}

export const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        setFetchData: (state, action) => {
            state.dataArray = action.payload.dataArray
            state.isLoading = action.payload.isLoading
        }
    }
})

export default ingredientsSlice.reducer