import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    dataArray: [],
    isLoading: false
}

export const ingredientDetailsSlice = createSlice({
    name: "ingredientDetails",
    initialState,
    reducers: {
        setFetchData(state, action) {
            state.dataArray = action.payload.dataArray
            state.isLoading = action.payload.isLoading
        }
    }
})

export default ingredientDetailsSlice.reducer
export const {setModalData} = ingredientDetailsSlice.actions