import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {ConstructorIngredient} from "../constructorIngredient/ConstructorIngredient";
import {memo} from "react";
import {Reorder} from "framer-motion";
import {updatePickedIngredient} from "../../service/reducers/pickedIngredientsSlice";
import styles from "./draggableIngredientsBlock.module.css"
import uuid from "react-uuid";
import {useAppDispatch} from "../../hooks/redux";
import {TIngredientObj} from "../../utils/models/ingredient-types/types";

interface IDraggableIngredientsBlock {
    pickedIngredients: TIngredientObj[]
}

export const DraggableIngredientsBlock = memo<IDraggableIngredientsBlock>(function DraggableIngredientsBlock({pickedIngredients}) {
    const dispatch = useAppDispatch()
    const update = (newIngredientList: TIngredientObj[]) => dispatch(updatePickedIngredient(newIngredientList))
    return (
      <Reorder.Group
          // TODO разобраться ts-ignore и в типизации framer-motion
          // @ts-ignore
          axys={"y"}
          onReorder={(newIngredientList:TIngredientObj[]) => update(newIngredientList)}
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
