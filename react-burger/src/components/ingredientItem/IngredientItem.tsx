import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorItemStyles from "./ingredientItem.module.css"
import {memo, useEffect, useState} from "react";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";
import {IIngredient, IIngredientObj} from "../../utils/interfaces";
import {useAppSelector} from "../../hooks/redux";

interface IIngredientItem {
    index: number
    collectionLength: number
    ingredient: IIngredient
}

type TPickedIngredientState = {
    pickedIngredient: IIngredientObj[];
    pickedBun: IIngredient;
}

export const IngredientItem = memo<IIngredientItem>(function IngredientItem ({ingredient, index, collectionLength})  {

    const [ingredientCount, setIngredientCount] = useState<number>(0)
    const state: TPickedIngredientState = useAppSelector(state => state.pickedIngredientsReducer)

    const pickedIngredient = state.pickedIngredient
    let pickedBun = state.pickedBun
    let data: IIngredient[] = []
    if (Object.keys(pickedBun).length !== 0) {
        data = [pickedBun, pickedBun]
    }
    pickedIngredient.map((ingredientObj: IIngredientObj) => data.push(ingredientObj.ingredient))
    useEffect(() => {
        setIngredientCount(data.filter((item) => item._id === ingredient._id).length)
    }, )

    const [, dragRef] = useDrag({
        type: "ingredientItem",
        item: ingredient
    });

    let lastPairClass: string
    if (collectionLength % 2 === 0)
        lastPairClass = index === collectionLength - 2 || index === collectionLength - 1? "" : "mb-8"
    else
        lastPairClass = index === collectionLength - 1? "" : "mb-8"
    const location = useLocation()

    return (
        <Link key={ingredient._id} to={`/ingredients/${ingredient._id}`} state={{ background: location }}>
            <div ref={dragRef} className={`${lastPairClass} ${(index % 2) === 0? "mr-6 ml-4" : ""} ${constructorItemStyles.item_card}`}>
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
        </Link>
    )
})
