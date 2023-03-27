import {createSlice} from "@reduxjs/toolkit";
import {IIngredient, IIngredientObj} from "../../utils/interfaces";


export type PickedIngredientSliceState = {
    pickedIngredient: IIngredientObj[]
    pickedBun: IIngredient
}

const initialState: PickedIngredientSliceState = {
    pickedIngredient: [{
        id: '',
        ingredient: {} as IIngredient
    }],
    pickedBun: {} as IIngredient
}

export const pickedIngredientSlice = createSlice({
    name: "pickedIngredient",
    initialState,
    reducers: {
        setFirstIngredient: (state, action) => {
            state.pickedIngredient = [{
                id: action.payload.id,
                ingredient: action.payload.ingredient
            }
            ]
        },
        setPickedIngredient: (state, action) => {
            state.pickedIngredient = [...state.pickedIngredient,
                ...[
                    {
                        id: action.payload.id,
                        ingredient: action.payload.ingredient
                    }]
            ]
        },
        setPickedBun: (state, action) => {
            state.pickedBun = {...action.payload.pickedIngredient}
        },
        deleteDraggableIngredient: (state, action) => {
          state.pickedIngredient = [
              ...state.pickedIngredient.filter((ingredientObj) => ingredientObj.id !== action.payload.ingredientObj.id)
          ]
        },
        setDraggableIngredient: (state, action) => {
          state.pickedIngredient = [...state.pickedIngredient, action.payload.pickedIngredient]
        },
        updatePickedIngredient: (state, action) => {
            state.pickedIngredient = [...action.payload]
        }
    }
})

export default pickedIngredientSlice.reducer
