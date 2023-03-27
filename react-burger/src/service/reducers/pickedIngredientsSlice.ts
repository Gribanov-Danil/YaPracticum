import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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
        setFirstIngredient: (state, action: PayloadAction<IIngredientObj>) => {
            state.pickedIngredient = [{
                id: action.payload.id,
                ingredient: action.payload.ingredient
            }
            ]
        },
        setPickedIngredient: (state, action: PayloadAction<IIngredientObj>) => {
            state.pickedIngredient = [...state.pickedIngredient,
                ...[
                    {
                        id: action.payload.id,
                        ingredient: action.payload.ingredient
                    }]
            ]
        },
        setPickedBun: (state, action: PayloadAction<IIngredient>) => {
            state.pickedBun = action.payload
        },
        deleteDraggableIngredient: (state, action: PayloadAction<IIngredientObj>) => {
          state.pickedIngredient = [
              ...state.pickedIngredient.filter((ingredientObj) => ingredientObj.id !== action.payload.id)
          ]
        },
        updatePickedIngredient: (state, action:PayloadAction<IIngredientObj[]>) => {
            state.pickedIngredient = [...action.payload]
        }
    }
})

export default pickedIngredientSlice.reducer
