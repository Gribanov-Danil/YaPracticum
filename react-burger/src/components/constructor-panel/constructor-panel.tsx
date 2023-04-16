import { OpenBun } from "../../ui/open-bun/open-bun"
import { ClosingBun } from "../../ui/closing-bun/closing-bun"
import panelStyles from "./constructor-panel.module.css"
import { useDrop } from "react-dnd"
import {
  setFirstIngredient,
  setPickedBun,
  setPickedIngredient,
} from "../../service/reducers/pickedIngredientsSlice"
import { DraggableIngredientsBlock } from "../draggable-ingredients-block/draggable-ingredients-block"
import uuid from "react-uuid"
import { EmptyOpenBun } from "../../ui/empty-open-bun/empty-open-bun"
import { EmptyClosingBun } from "../../ui/empty-closing-bun/empty-closing-bun"
import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { TIngredient } from "../../utils/models/ingredient-types/types"

export const ConstructorPanel: FC = () => {
  const state = useAppSelector((state) => state.pickedIngredientsReducer)
  const pickedIngredient = state.pickedIngredient
  const pickedBun = state.pickedBun

  const dispatch = useAppDispatch()

  const [, dropTarget] = useDrop({
    accept: "ingredientItem",
    drop(ingredient: TIngredient) {
      if (ingredient.type === "bun") dispatch(setPickedBun(ingredient))
      else if (
        pickedIngredient.length === 0 ||
        Object.keys(pickedIngredient[0].ingredient).length === 0
      )
        dispatch(setFirstIngredient({ ingredient: ingredient, id: uuid() }))
      else dispatch(setPickedIngredient({ ingredient: ingredient, id: uuid() }))
    },
  })

  return (
    <div ref={dropTarget} className={`${panelStyles.panel} mb-10`}>
      {Object.keys(pickedBun).length !== 0 ? (
        <OpenBun bun={pickedBun} />
      ) : (
        <EmptyOpenBun text={"Положите выбранную булку"} />
      )}
      <DraggableIngredientsBlock pickedIngredients={pickedIngredient} />
      {Object.keys(pickedBun).length !== 0 ? (
        <ClosingBun bun={pickedBun} />
      ) : (
        <EmptyClosingBun text={"Положите выбранную булку"} />
      )}
    </div>
  )
}
