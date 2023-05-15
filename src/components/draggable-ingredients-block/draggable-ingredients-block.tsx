import panelStyles from "../constructor-panel/constructor-panel.module.css"
import { ConstructorIngredient } from "../constructor-ingredient/constructor-ingredient"
import { memo } from "react"
import { Reorder } from "framer-motion"
import { updatePickedIngredient } from "../../service/reducers/picked-ingredients-slice/picked-ingredients-slice"
import styles from "./draggable-ingredients-block.module.css"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { TIngredientObj } from "../../utils/models/ingredient-types/types"
import { getScreenType } from "../../utils/getScreenType"

/**
 * Контейнер конструктора бургеров с поддержкой dnd
 */
export const DraggableIngredientsBlock = memo(function DraggableIngredientsBlock() {
  const state = useAppSelector((state) => state.pickedIngredientsReducer)
  const pickedIngredients = state.pickedIngredient
  const dispatch = useAppDispatch()
  const update = (newIngredientList: TIngredientObj[]) =>
    dispatch(updatePickedIngredient(newIngredientList))
  const screenType = getScreenType()
  return (
    <Reorder.Group
      // TODO разобраться ts-ignore и в типизации framer-motion
      // @ts-ignore
      axys={"y"}
      onReorder={(newIngredientList: TIngredientObj[]) => update(newIngredientList)}
      values={pickedIngredients}
      className={panelStyles.constructor_block}
    >
      {pickedIngredients.map((ingredientObj) =>
        Object.keys(ingredientObj.ingredient).length !== 0 ? (
          <ConstructorIngredient key={ingredientObj.id} ingredientObj={ingredientObj} />
        ) : (
          <div key={ingredientObj.id} className={styles.no_ingredient}>
            {screenType === "desktop"
              ? "И не забудтье добавить начинку"
              : "Добавьте свой первый ингредиент!"}
          </div>
        ),
      )}
    </Reorder.Group>
  )
})
