import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorItemStyles from "./ingredientItem.module.css"

export const IngredientItem = (props) => {
    let lastPairClass
    if (props.collectionLength % 2 === 0)
        lastPairClass = props.index === props.collectionLength - 2 || props.index === props.collectionLength - 1? "" : "mb-8"
    else
        lastPairClass = props.index === props.collectionLength - 1? "" : "mb-8"
    return (
        <div className={`${lastPairClass} ${(props.index % 2) === 0? "mr-6 ml-4" : ""} ${constructorItemStyles.item_card}`}>
            <Counter count={1} size="default" extraClass="m-1" />
            <div className="ml-4 mb-1 mr-4">
                <img src={props.src} alt=""/>
            </div>
            <div className={`${constructorItemStyles.price_block} mb-1`}>
                <p className = {`text text_type_digits-default ${constructorItemStyles.price} mr-2`}>{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <div>
                <p className={`text text_type_main-default ${constructorItemStyles.name}`}>
                    {props.name}
                </p>
            </div>
        </div>
    )
}