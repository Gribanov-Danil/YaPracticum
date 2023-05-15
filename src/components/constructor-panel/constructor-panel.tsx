import { OpenBun } from "../../ui/open-bun/open-bun"
import { ClosingBun } from "../../ui/closing-bun/closing-bun"
import panelStyles from "./constructor-panel.module.css"
import { useDrop } from "react-dnd"
import { DraggableIngredientsBlock } from "../draggable-ingredients-block/draggable-ingredients-block"
import { EmptyOpenBun } from "../../ui/empty-open-bun/empty-open-bun"
import { EmptyClosingBun } from "../../ui/empty-closing-bun/empty-closing-bun"
import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { TIngredient } from "../../utils/models/ingredient-types/types"
import { addIngredientInStore } from "../../utils/addIngredientInStore"

/**
 * Контейнер конструктора бургера
 */
export const ConstructorPanel: FC = () => {
  const state = useAppSelector((state) => state.pickedIngredientsReducer)
  const pickedIngredient = state.pickedIngredient
  const pickedBun = state.pickedBun

  const dispatch = useAppDispatch()

  const [, dropTarget] = useDrop({
    accept: "ingredientItem",
    drop(ingredient: TIngredient) {
      addIngredientInStore(ingredient, pickedIngredient, dispatch)
    },
  })

  return (
    <div ref={dropTarget} className={`${panelStyles.panel} mb-10`} data-cy={"drop-area"}>
      {Object.keys(pickedBun).length !== 0 ? (
        <OpenBun bun={pickedBun} />
      ) : (
        <EmptyOpenBun text={"Положите выбранную булку"} />
      )}
      <DraggableIngredientsBlock />
      {Object.keys(pickedBun).length !== 0 ? (
        <ClosingBun bun={pickedBun} />
      ) : (
        <EmptyClosingBun text={"Положите выбранную булку"} />
      )}
    </div>
  )
}
