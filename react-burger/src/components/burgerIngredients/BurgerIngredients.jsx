import {IngredientsTab} from "../ingredientsTab/IngredientsTab";
import {IngredientsBlock} from "../ingredientsBlock/IngredientsBlock";
import {dataPropTypes} from "../../utils/prop-types";

export const BurgerIngredients = ({data}) => {
    return (
        <div className="mt-10 mb-10 mr-10">
            <p className="mb-5 text text_type_main-large">
                Соберите бургер
            </p>
            <IngredientsTab/>
            <IngredientsBlock data={data}/>
        </div>
    )
}

BurgerIngredients.propTypes = dataPropTypes