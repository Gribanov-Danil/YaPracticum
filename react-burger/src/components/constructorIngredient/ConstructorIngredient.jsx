import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import panelStyles from "../constructorPanel/constructorPanel.module.css";
import {pickedIngredientSlice} from "../../service/reducers/pickedIngredientsSlice";
import {useDispatch} from "react-redux";
import {memo} from "react";
import {Reorder} from "framer-motion";
import { ingredientObjectWithCustomFieldPropTypes} from "../../utils/prop-types";

// Элемент, имеющий днд
export const ConstructorIngredient = memo(function ConstructorIngredient ({ingredientObj}) {
    const {deleteDraggableIngredient} = pickedIngredientSlice.actions
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(deleteDraggableIngredient({pickedIngredient: ingredientObj}))
    }

    return (
        <Reorder.Item value={ingredientObj} className={panelStyles.ingredient}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text={ingredientObj.ingredient.name}
                    price={ingredientObj.ingredient.price}
                    thumbnail={ingredientObj.ingredient.image}
                    handleClose={handleClose}
                />
        </Reorder.Item>
    )
})

ConstructorIngredient.propTypes = ingredientObjectWithCustomFieldPropTypes