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

    const {setPickedIngredient, setPickedBun, setFirstIngredient} = pickedIngredientSlice.actions
    const dispatch = useDispatch()

    const [, dropTarget] = useDrop({
        accept: "ingredientItem",
        drop(ingredient) {
            if (ingredient.type === "bun")
                dispatch(setPickedBun({pickedIngredient: ingredient}))
            else
                if (pickedIngredient.length === 0 || Object.keys(pickedIngredient[0].ingredient).length === 0)
                    dispatch(setFirstIngredient({ingredient: ingredient}))
                else
                    dispatch(setPickedIngredient({ingredient: ingredient}))
        },
    })

    // const [, dropIngredientTarget] = useDrop({
    //     accept: "draggableIngredientItem",
    //     drop(ingredient) {
    //         dispatch(setPickedIngredient({pickedIngredient: {ingredient: ingredient}}))
    //     },
    // })
    return (
            <div ref={(el) => {dropTarget(el); /*dropIngredientTarget(el)*/}} className={`${panelStyles.panel} mb-10`}>
                {Object.keys(pickedBun).length !== 0 && <OpenBun bun={pickedBun}/>}

                <div className={panelStyles.constructor_block}>
                    {pickedIngredient.map((ingredientObj, index) => (
                        Object.keys(ingredientObj.ingredient).length !== 0 &&
                        <ConstructorIngredient key={index} ingredientObj={ingredientObj} index={index}/>
                    ))}
                </div>
                {Object.keys(pickedBun).length !== 0 && <ClosingBun bun={pickedBun}/>}
            </div>
    )
}

ConstructorPanel.propTypes = dataPropTypes