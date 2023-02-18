import {IngredientsTab} from "../ingredientsTab/IngredientsTab";
import {IngredientsBlock} from "../ingredientsBlock/IngredientsBlock";
import {dataPropTypes} from "../../utils/prop-types";

export const BurgerIngredients = () => {
    return (
        <div className="mt-10 mb-10 mr-10">
            <p className="mb-5 text text_type_main-large">
                Соберите бургер
            </p>
            <IngredientsTab/>
            <IngredientsBlock/>
        </div>
    )
}

BurgerIngredients.propTypes = dataPropTypes