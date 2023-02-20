import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    pickedIngredient: [{
        index: 0,
        ingredient: {}
    }],
    pickedBun: {}
}

export const pickedIngredientSlice = createSlice({
    name: "pickedIngredient",
    initialState,
    reducers: {
        setFirstIngredient: (state, action) => {
            state.pickedIngredient = [{
                index: 0,
                ingredient: action.payload.ingredient
            }
            ]
        },
        setPickedIngredient: (state, action) => {
            state.pickedIngredient = [...state.pickedIngredient,
                ...[
                    {
                        index: state.pickedIngredient.length,
                        ingredient: action.payload.ingredient
                    }]
            ]
        },
        setPickedBun: (state, action) => {
            state.pickedBun = {...action.payload.pickedIngredient}
        },
        deleteDraggableIngredient: (state, action) => {
            console.log(action.payload.pickedIngredient)
          state.pickedIngredient = [
              ...state.pickedIngredient.filter((ingredientObj) => ingredientObj.index !== action.payload.pickedIngredient.index)
          ]
        },
        // setDraggableIngredient: (state, action) => {
        //   // let newState =
        // }
    }
})

export default pickedIngredientSlice.reducer
