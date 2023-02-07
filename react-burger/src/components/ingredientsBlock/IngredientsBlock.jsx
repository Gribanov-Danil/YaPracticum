import constructorStyle from "./ingredientsBlock.module.css"
import {IngredientsSection} from "../ingredientsSection/IngredientsSection";
import PropTypes from "prop-types";

export const IngredientsBlock = ({data}) => {
    const bunList = data.filter( (ingredient) => ingredient.type === "bun" )
    const mainList = data.filter( (ingredient) => ingredient.type === "main" )
    const sauceList = data.filter( (ingredient) => ingredient.type === "sauce" )
    return (
        <div className={constructorStyle.constructor}>
            <IngredientsSection sectionTitle={"Булки"} itemList={bunList}/>
            <IngredientsSection sectionTitle={"Соусы"} itemList={sauceList}/>
            <IngredientsSection sectionTitle={"Начинки"} itemList={mainList}/>
        </div>
    )
}

IngredientsBlock.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number,
    })),
}