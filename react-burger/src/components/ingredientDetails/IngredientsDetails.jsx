import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components"
import ingredientsDetailsStyles from "./ingredientsDetails.module.css"
import {IngredientCharacteristic} from "../ingredientCharacteristic/IngredientCharacteristic";

export const IngredientsDetails = ({ingredient, onClick}) => {
    return (
        <>
            <div className={`${ingredientsDetailsStyles.header} mt-10 mr-10 mb-6 ml-10`}>
                <p className={`text text_type_main-large`}>Детали ингредиента</p>
                <div className={ingredientsDetailsStyles.close}>
                    <CloseIcon type="primary" onClick={onClick}/>
                </div>

            </div>
            <div className="ml-25 mb-4 mr-25">
                <img src={ingredient.image_large} alt=""/>
            </div>
            <div className={ingredientsDetailsStyles.text_block}>
                <p className="text text_type_main-medium mb-8">{ingredient.name}</p>
                <div className={`mb-15 ${ingredientsDetailsStyles.characteristic_block}`}>
                    <IngredientCharacteristic title={"Калории,ккал"} characteristic={ingredient.calories}/>
                    <IngredientCharacteristic title={"Белки, г"} characteristic={ingredient.proteins}/>
                    <IngredientCharacteristic title={"Жиры, г"} characteristic={ingredient.fat}/>
                    <IngredientCharacteristic title={"Углеводы, г"} characteristic={ingredient.carbohydrates}/>
                </div>
            </div>
        </>
    )
}