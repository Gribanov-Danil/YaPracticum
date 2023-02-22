import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {ConstructorIngredient} from "../constructorIngredient/ConstructorIngredient";
import {memo} from "react";
import {Reorder} from "framer-motion";
import {pickedIngredientSlice} from "../../service/reducers/pickedIngredientsSlice";
import {useDispatch} from "react-redux";


export const DraggableIngredientsBlock = memo(function DraggableIngredientsBlock({pickedIngredients}) {
    const {updatePickedIngredient} = pickedIngredientSlice.actions
    const dispatch = useDispatch()
    const update = (newIngredientList) => dispatch(updatePickedIngredient(newIngredientList))

  return (
      <Reorder.Group
          axys={"y"}
          onReorder={(newIngredientList) => update(newIngredientList)}
          values={pickedIngredients}
          className={panelStyles.constructor_block}
      >
          {pickedIngredients.map((ingredientObj) => (
              Object.keys(ingredientObj.ingredient).length !== 0 &&
              <ConstructorIngredient
                  key={ingredientObj.id}
                  ingredientObj={ingredientObj}
              />
          ))}
      </Reorder.Group>
  )
})