import {createSlice} from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const initialState = {
    pickedIngredient: [{
        id: 0,
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
                id: uuid(),
                ingredient: action.payload.ingredient
            }
            ]
        },
        setPickedIngredient: (state, action) => {
            state.pickedIngredient = [...state.pickedIngredient,
                ...[
                    {
                        id: uuid(),
                        ingredient: action.payload.ingredient
                    }]
            ]
        },
        setPickedBun: (state, action) => {
            state.pickedBun = {...action.payload.pickedIngredient}
        },
        deleteDraggableIngredient: (state, action) => {
          state.pickedIngredient = [
              ...state.pickedIngredient.filter((ingredientObj) => ingredientObj.id !== action.payload.pickedIngredient.id)
          ]
        },
        setDraggableIngredient: (state, action) => {
          state.pickedIngredient = [...state.pickedIngredient, action.payload.pickedIngredient]
        },
        updatePickedIngredient: (state, action) => {
            console.log(action.payload)
            state.pickedIngredient = [...action.payload]
        }
    }
})

export default pickedIngredientSlice.reducer
