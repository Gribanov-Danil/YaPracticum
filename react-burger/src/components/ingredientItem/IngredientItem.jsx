import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorItemStyles from "./ingredientItem.module.css"
import PropTypes from "prop-types";

export const IngredientItem = ({index, collectionLength, src, price, name}) => {
    let lastPairClass
    if (collectionLength % 2 === 0)
        lastPairClass = index === collectionLength - 2 || index === collectionLength - 1? "" : "mb-8"
    else
        lastPairClass = index === collectionLength - 1? "" : "mb-8"
    return (
        <div className={`${lastPairClass} ${(index % 2) === 0? "mr-6 ml-4" : ""} ${constructorItemStyles.item_card}`}>
            <Counter count={1} size="default" extraClass="m-1" />
            <div className="ml-4 mb-1 mr-4">
                <img src={src} alt=""/>
            </div>
            <div className={`${constructorItemStyles.price_block} mb-1`}>
                <p className = {`text text_type_digits-default ${constructorItemStyles.price} mr-2`}>{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <div>
                <p className={`text text_type_main-default ${constructorItemStyles.name}`}>
                    {name}
                </p>
            </div>
        </div>
    )
}

IngredientItem.propTypes = {
    index: PropTypes.number,
    collectionLength: PropTypes.number,
    src: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
}