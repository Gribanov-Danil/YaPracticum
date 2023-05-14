import {
  setFirstIngredient,
  setPickedBun,
  setPickedIngredient,
} from "../service/reducers/picked-ingredients-slice/picked-ingredients-slice"
import uuid from "react-uuid"
import { TIngredient, TIngredientObj } from "./models/ingredient-types/types"
import { TAppDispatch } from "../service/store"

/**
 * Функция, добавляющая ингредиент в стор pickedIngredientSlice
 * @param { ingredient } ingredient выбранный ингредиент типа TIngredient
 * @param { pickedIngredient } pickedIngredient Массив выбранных ингредиентов
 * @param { dispatch } dispatch Диспатч для доступа в стор pickedIngredientSlice
 */
export const addIngredientInStore = (
  ingredient: TIngredient,
  pickedIngredient: TIngredientObj[],
  dispatch: TAppDispatch,
) => {
  if (ingredient.type === "bun") dispatch(setPickedBun(ingredient))
  else if (
    pickedIngredient.length === 0 ||
    Object.keys(pickedIngredient[0].ingredient).length === 0
  )
    dispatch(setFirstIngredient({ ingredient: ingredient, id: uuid() }))
  else dispatch(setPickedIngredient({ ingredient: ingredient, id: uuid() }))
}
