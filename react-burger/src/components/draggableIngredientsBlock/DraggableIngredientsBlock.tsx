import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {ConstructorIngredient} from "../constructorIngredient/ConstructorIngredient";
import {memo} from "react";
import {Reorder} from "framer-motion";
import {updatePickedIngredient} from "../../service/reducers/pickedIngredientsSlice";
import styles from "./draggableIngredientsBlock.module.css"
import uuid from "react-uuid";
import {IIngredientObj} from "../../utils/interfaces";
import {useAppDispatch} from "../../hooks/redux";

interface IDraggableIngredientsBlock {
    pickedIngredients: IIngredientObj[]
}

export const DraggableIngredientsBlock = memo<IDraggableIngredientsBlock>(function DraggableIngredientsBlock({pickedIngredients}) {
    const dispatch = useAppDispatch()
    const update = (newIngredientList: IIngredientObj[]) => dispatch(updatePickedIngredient(newIngredientList))
    return (
      <Reorder.Group
          // TODO разобраться ts-ignore и в типизации framer-motion
          // @ts-ignore
          axys={"y"}
          onReorder={(newIngredientList:IIngredientObj[]) => update(newIngredientList)}
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
