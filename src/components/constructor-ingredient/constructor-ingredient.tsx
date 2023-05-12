import panelStyles from "../constructor-panel/constructor-panel.module.css"
import { deleteDraggableIngredient } from "../../service/reducers/picked-ingredients-slice/picked-ingredients-slice"
import { memo } from "react"
import { Reorder } from "framer-motion"
import { TIngredientObj } from "../../utils/models/ingredient-types/types"
import { useAppDispatch } from "../../hooks/redux"
import { getScreenType } from "../../utils/getScreenType"
import { ConstructorElement } from "../../ui/constructor-element/constructor-element"
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"

interface IConstructorIngredient {
  ingredientObj: TIngredientObj
}

// Элемент, имеющий днд
export const ConstructorIngredient = memo<IConstructorIngredient>(function ConstructorIngredient({
  ingredientObj,
}) {
  const dispatch = useAppDispatch()
  const handleClose = () => dispatch(deleteDraggableIngredient(ingredientObj))

  return (
    <Reorder.Item value={ingredientObj} className={panelStyles.ingredient}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredientObj.ingredient.name}
        price={ingredientObj.ingredient.price}
        thumbnail={ingredientObj.ingredient.image_mobile}
        handleClose={handleClose}
        extraClass={getScreenType() === "desktop" ? "" : panelStyles.mobile_constructor}
      />
    </Reorder.Item>
  )
})
