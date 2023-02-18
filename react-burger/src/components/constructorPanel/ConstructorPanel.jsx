import {OpenBun} from "../openBun/OpenBun";
import {ConstructorIngredient} from "../constructorIngredient/ConstructorIngredient";
import {ClosingBun} from "../closingBun/ClosingBun";
import panelStyles from "./constructorPanel.module.css"
import {dataPropTypes} from "../../utils/prop-types";
import {useSelector} from "react-redux";

export const ConstructorPanel = () => {
    const state = useSelector(state => state.ingredientDetailsReducer)
    const data = state.dataArray
    // const data = useContext(ResponseContext)
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

ConstructorPanel.propTypes = dataPropTypes