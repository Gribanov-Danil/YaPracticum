import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TIngredient, TIngredientObj } from "../../utils/models/ingredient-types/types"

export type PickedIngredientSliceState = {
  pickedIngredient: TIngredientObj[]
  pickedBun: TIngredient
}

const initialState: PickedIngredientSliceState = {
  pickedIngredient: [
    {
      id: "",
      ingredient: {} as TIngredient,
    },
  ],
  pickedBun: {} as TIngredient,
}

export const pickedIngredientSlice = createSlice({
  name: "pickedIngredient",
  initialState,
  reducers: {
    setFirstIngredient: (state, action: PayloadAction<TIngredientObj>) => {
      state.pickedIngredient = [
        {
          id: action.payload.id,
          ingredient: action.payload.ingredient,
        },
      ]
    },
    setPickedIngredient: (state, action: PayloadAction<TIngredientObj>) => {
      state.pickedIngredient = [
        ...state.pickedIngredient,
        ...[
          {
            id: action.payload.id,
            ingredient: action.payload.ingredient,
          },
        ],
      ]
    },
    setPickedBun: (state, action: PayloadAction<TIngredient>) => {
      state.pickedBun = action.payload
    },
    deleteDraggableIngredient: (state, action: PayloadAction<TIngredientObj>) => {
      state.pickedIngredient = [
        ...state.pickedIngredient.filter((ingredientObj) => ingredientObj.id !== action.payload.id),
      ]
    },
    updatePickedIngredient: (state, action: PayloadAction<TIngredientObj[]>) => {
      state.pickedIngredient = [...action.payload]
    },
  },
})

export const {
  setFirstIngredient,
  setPickedIngredient,
  setPickedBun,
  deleteDraggableIngredient,
  updatePickedIngredient,
} = pickedIngredientSlice.actions
