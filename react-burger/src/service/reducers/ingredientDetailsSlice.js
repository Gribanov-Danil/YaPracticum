import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ingredient: {}
}

export const ingredientDetailsSlice = createSlice({
    name: "ingredientDetails",
    initialState,
    reducers: {
        setModalData: (state, action) => {
            state.ingredient = action.payload.ingredient
        },
        deleteModalData: (state) => {
            state.ingredient = {}
        }
    }
})

export default ingredientDetailsSlice.reducer