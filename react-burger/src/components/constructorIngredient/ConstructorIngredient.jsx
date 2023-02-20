import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {useDrag} from "react-dnd";
import {pickedIngredientSlice} from "../../service/reducers/pickedIngredientsReducer";
import {useDispatch} from "react-redux";

export const ConstructorIngredient = ({ingredientObj}) => {
    const [{isDrag}, dragRef] = useDrag({
        type: "draggableIngredientItem",
        item: ingredientObj,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    const {deleteDraggableIngredient} = pickedIngredientSlice.actions
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(deleteDraggableIngredient({pickedIngredient: ingredientObj}))
    }
    return (
        !isDrag &&
        <div onClick={() => console.log(ingredientObj)} ref={dragRef} className={panelStyles.ingredient}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingredientObj.ingredient.name}
                price={ingredientObj.ingredient.price}
                thumbnail={ingredientObj.ingredient.image}
                handleClose={handleClose}
            />
        </div>
    )
}

// ConstructorIngredient.propTypes = dataElementWithCustomFieldPropTypes("ingredient")