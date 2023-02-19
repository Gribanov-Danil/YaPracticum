import {OpenBun} from "../openBun/OpenBun";
import {ConstructorIngredient} from "../constructorIngredient/ConstructorIngredient";
import {ClosingBun} from "../closingBun/ClosingBun";
import panelStyles from "./constructorPanel.module.css"
import {dataPropTypes} from "../../utils/prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {pickedIngredientSlice} from "../../service/reducers/pickedIngredientsReducer";

export const ConstructorPanel = () => {
    const state = useSelector(state => state.pickedIngredientsReducer)
    const pickedIngredient = state.pickedIngredient
    const pickedBun = state.pickedBun

    const {setPickedIngredient, setPickedBun} = pickedIngredientSlice.actions
    const dispatch = useDispatch()

    const [, dropTarget] = useDrop({
        accept: "ingredientItem",
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(ingredient) {
            if (ingredient.type === "bun")
                dispatch(setPickedBun({pickedIngredient: ingredient}))
            else
                dispatch(setPickedIngredient({pickedIngredient: ingredient}))
        },
    });
    return (
            <div ref={dropTarget} className={`${panelStyles.panel} mb-10`}>
                {Object.keys(pickedBun).length !== 0 && <OpenBun bun={pickedBun}/>}

                <div className={panelStyles.constructor_block}>
                    {pickedIngredient.map((ingredient, index) => (
                        <ConstructorIngredient key={index} ingredient={ingredient}/>
                    ))}
                </div>
                {Object.keys(pickedBun).length !== 0 && <ClosingBun bun={pickedBun}/>}
            </div>
    )
}

ConstructorPanel.propTypes = dataPropTypes