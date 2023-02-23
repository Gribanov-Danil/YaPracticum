import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorItemStyles from "./ingredientItem.module.css"
import PropTypes from "prop-types";
import {memo, useEffect, useState} from "react";
import {dataElementWithCustomFieldPropTypes} from "../../utils/prop-types";
import {useSelector} from "react-redux";
import {useDrag} from "react-dnd";

export const IngredientItem = memo(function IngredientItem ({ingredient, index, collectionLength, handleOpenModal})  {

    const [ingredientCount, setIngredientCount] = useState(0)
    const state = useSelector(state => state.pickedIngredientsReducer)

    const pickedIngredient = state.pickedIngredient
    let pickedBun = state.pickedBun
    pickedBun = Object.keys(pickedBun).length !== 0? [pickedBun]: []
    let data = [...pickedBun, ...pickedBun]
    pickedIngredient.map((ingredientObj) => data.push(ingredientObj.ingredient))
    useEffect(() => {
        setIngredientCount(data.filter((item) => item._id === ingredient._id).length)
    }, )

    const [, dragRef] = useDrag({
        type: "ingredientItem",
        item: ingredient
    });

    let lastPairClass
    if (collectionLength % 2 === 0)
        lastPairClass = index === collectionLength - 2 || index === collectionLength - 1? "" : "mb-8"
    else
        lastPairClass = index === collectionLength - 1? "" : "mb-8"

    return (
        <div ref={dragRef} onClick={() => handleOpenModal(ingredient)} className={`${lastPairClass} ${(index % 2) === 0? "mr-6 ml-4" : ""} ${constructorItemStyles.item_card}`}>
            {ingredientCount !== 0 && <Counter count={ingredientCount} size="default" extraClass="m-1" />}
            <div className="ml-4 mb-1 mr-4">
                <img src={ingredient.image} alt=""/>
            </div>
            <div className={`${constructorItemStyles.price_block} mb-1`}>
                <p className = {`text text_type_digits-default ${constructorItemStyles.price} mr-2`}>{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <div>
                <p className={`text text_type_main-default ${constructorItemStyles.name}`}>
                    {ingredient.name}
                </p>
            </div>
        </div>
    )
})

IngredientItem.propTypes = {
    index: PropTypes.number.isRequired,
    collectionLength: PropTypes.number.isRequired,
    ingredient:  PropTypes.shape(dataElementWithCustomFieldPropTypes("ingredient"))
}