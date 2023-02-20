import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {ConstructorIngredient} from "../constructorIngredient/ConstructorIngredient";

export const DraggableIngredientsBlock = ({pickedIngredient}) => {

    // const [, dropIngredientTarget] = useDrop({
    //     accept: "draggableIngredientItem",
    //     drop(ingredient) {
    //         dispatch(setDraggableIngredient({ingredient: ingredient}))
    //     },
    // })
  return (
      <div className={panelStyles.constructor_block}>
          {pickedIngredient.map((ingredientObj, index) => (
              Object.keys(ingredientObj.ingredient).length !== 0 &&
              <ConstructorIngredient key={index} ingredientObj={ingredientObj} index={index}/>
          ))}
      </div>
  )
}