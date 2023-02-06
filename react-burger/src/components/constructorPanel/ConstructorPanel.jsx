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