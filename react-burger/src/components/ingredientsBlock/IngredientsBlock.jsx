import constructorStyle from "./ingredientsBlock.module.css"
import {IngredientsSection} from "../ingredientsSection/IngredientsSection";

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