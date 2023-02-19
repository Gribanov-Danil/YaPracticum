import constructorStyle from "./ingredientsBlock.module.css"
import {IngredientsSection} from "../ingredientsSection/IngredientsSection";
import {dataPropTypes} from "../../utils/prop-types";
import {useSelector} from "react-redux";

export const IngredientsBlock = () => {
    const state = useSelector(state => state.ingredientDetailsReducer)
    const data = state.dataArray
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

IngredientsBlock.propTypes = dataPropTypes