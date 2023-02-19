import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    pickedIngredient: [],
    pickedBun: {}
}

export const pickedIngredientSlice = createSlice({
    name: "pickedIngredient",
    initialState,
    reducers: {
        setPickedIngredient: (state, action) => {
            state.pickedIngredient = [...state.pickedIngredient, ...[action.payload.pickedIngredient]]
        },
        setPickedBun: (state, action) => {
            state.pickedBun = {...action.payload.pickedIngredient}
        }
            // state.pickedIngredient = action.payload.pickedIngredient
    }
})

export default pickedIngredientSlice.reducer
