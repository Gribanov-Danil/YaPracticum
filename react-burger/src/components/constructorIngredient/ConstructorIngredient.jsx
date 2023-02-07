import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {dataElementPropTypes} from "../../utils/prop-types";

export const ConstructorIngredient = ({ingredient}) => {
    return (
        <div className={panelStyles.ingredient}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
            />
        </div>
    )
}

ConstructorIngredient.propTypes = dataElementPropTypes("ingredient")