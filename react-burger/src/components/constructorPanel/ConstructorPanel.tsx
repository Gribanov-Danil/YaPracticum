import {OpenBun} from "../openBun/OpenBun";
import {ClosingBun} from "../closingBun/ClosingBun";
import panelStyles from "./constructorPanel.module.css"
import {useDispatch} from "react-redux";
import {useDrop} from "react-dnd";
import {setFirstIngredient, setPickedBun, setPickedIngredient} from "../../service/reducers/pickedIngredientsSlice";
import {DraggableIngredientsBlock} from "../draggableIngredientsBlock/DraggableIngredientsBlock";
import uuid from "react-uuid";
import {EmptyOpenBun} from "../emptyOpenBun/EmptyOpenBun";
import {EmptyClosingBun} from "../emptyClosingBun/EmptyClosingBun";
import {FC} from "react";
import {useAppSelector} from "../../hooks/redux";
import {TIngredient} from "../../utils/models/ingredient-types/types";

export const ConstructorPanel: FC = () => {
    const state = useAppSelector(state => state.pickedIngredientsReducer)
    const pickedIngredient = state.pickedIngredient
    const pickedBun = state.pickedBun

    const dispatch = useDispatch()

    const [, dropTarget] = useDrop({
        accept: "ingredientItem",
        drop(ingredient: TIngredient) {
            if (ingredient.type === "bun")
                dispatch(setPickedBun(ingredient))
            else
                if (pickedIngredient.length === 0 || Object.keys(pickedIngredient[0].ingredient).length === 0)
                    dispatch(setFirstIngredient({ingredient: ingredient, id: uuid()}))
                else
                    dispatch(setPickedIngredient({ingredient: ingredient, id: uuid()}))
        },
    })

    return (
            <div ref={dropTarget} className={`${panelStyles.panel} mb-10`}>
                {Object.keys(pickedBun).length !== 0 ? <OpenBun bun={pickedBun}/>
                    : <EmptyOpenBun text={"Положите выбранную булку"} />
                }
                <DraggableIngredientsBlock pickedIngredients={pickedIngredient}/>
                {Object.keys(pickedBun).length !== 0 ? <ClosingBun bun={pickedBun}/>
                    : <EmptyClosingBun text={"Положите выбранную булку"}/>}
            </div>
    )
}
