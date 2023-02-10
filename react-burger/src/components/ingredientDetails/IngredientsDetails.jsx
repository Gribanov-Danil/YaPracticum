import ingredientsDetailsStyles from "./ingredientsDetails.module.css"
import {IngredientCharacteristic} from "../ingredientCharacteristic/IngredientCharacteristic";

export const IngredientsDetails = ({ingredient}) => {
    return (
        <>
            <div className={`${ingredientsDetailsStyles.ingredient_image}`}>
                <img src={ingredient.image_large} alt=""/>
            </div>
            <div className={ingredientsDetailsStyles.text_block}>
                <p className="text text_type_main-medium mb-8">{ingredient.name}</p>
                <div className={`mb-15 mr-25 ml-25 ${ingredientsDetailsStyles.characteristic_block}`}>
                    <IngredientCharacteristic title={"Калории,ккал"} characteristic={ingredient.calories}/>
                    <IngredientCharacteristic title={"Белки, г"} characteristic={ingredient.proteins}/>
                    <IngredientCharacteristic title={"Жиры, г"} characteristic={ingredient.fat}/>
                    <IngredientCharacteristic title={"Углеводы, г"} characteristic={ingredient.carbohydrates}/>
                </div>
            </div>
        </>
    )
}