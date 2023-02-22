import {OpenBun} from "../openBun/OpenBun";
import {ClosingBun} from "../closingBun/ClosingBun";
import panelStyles from "./constructorPanel.module.css"
import {dataPropTypes} from "../../utils/prop-types";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {pickedIngredientSlice} from "../../service/reducers/pickedIngredientsReducer";
import {DraggableIngredientsBlock} from "../draggableIngredientsBlock/DraggableIngredientsBlock";

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

    return (
            <div ref={dropTarget} className={`${panelStyles.panel} mb-10`}>
                {Object.keys(pickedBun).length !== 0 && <OpenBun bun={pickedBun}/>}
                <DraggableIngredientsBlock pickedIngredients={pickedIngredient}/>
                {Object.keys(pickedBun).length !== 0 && <ClosingBun bun={pickedBun}/>}
            </div>
    )
}

ConstructorPanel.propTypes = dataPropTypes