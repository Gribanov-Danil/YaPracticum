import {OpenBun} from "../openBun/OpenBun";
import {ConstructorIngredient} from "../constructorIngredient/ConstructorIngredient";
import {ClosingBun} from "../closingBun/ClosingBun";
import panelStyles from "./constructorPanel.module.css"

export const ConstructorPanel = ({data}) => {
    const buns = data.filter(item => item.type === "bun")
    const ingredients = data.filter(item => item.type !== "bun")
    return (
        <div className={`${panelStyles.panel} mb-10`}>
            <OpenBun bun={buns[0]}/>
            <div className={panelStyles.constructor_block}>
                {ingredients.map((ingredient, index) => (
                    <ConstructorIngredient key={index} ingredient={ingredient}/>
                ))}
            </div>
            <ClosingBun bun={buns[1]}/>
        </div>
    )
}

ConstructorPanel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number,
    })),
}