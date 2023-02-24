import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {ConstructorIngredient} from "../constructorIngredient/ConstructorIngredient";
import {memo} from "react";
import {Reorder} from "framer-motion";
import {pickedIngredientSlice} from "../../service/reducers/pickedIngredientsSlice";
import {useDispatch} from "react-redux";
import styles from "./draggableIngredientsBlock.module.css"
import uuid from "react-uuid";
import {ingredientObjectPropTypes} from "../../utils/prop-types";


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
              Object.keys(ingredientObj.ingredient).length !== 0 ?
                  <ConstructorIngredient
                      key={ingredientObj.id}
                      ingredientObj={ingredientObj}
                  />
                  :
                  <div key={uuid()} className={`ml-8 ${styles.no_ingredient}`}>И не забудтье добавить начинку</div>
          ))}
      </Reorder.Group>
  )
})

DraggableIngredientsBlock.propTypes = ingredientObjectPropTypes