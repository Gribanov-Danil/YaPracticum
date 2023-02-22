import constructorStyle from "./ingredientsBlock.module.css"
import {IngredientsSection} from "../ingredientsSection/IngredientsSection";
import {dataPropTypes} from "../../utils/prop-types";
import {useSelector} from "react-redux";
import {TabValues} from "../../utils/constants/tabValues";

export const IngredientsBlock = ({refList}) => {
    const state = useSelector(state => state.ingredientsReducer)
    const data = state.dataArray
    const bunList = data.filter((ingredient) => ingredient.type === "bun" )
    const mainList = data.filter((ingredient) => ingredient.type === "main" )
    const sauceList = data.filter((ingredient) => ingredient.type === "sauce" )

    return (
        <div className={`ingredients_block ${constructorStyle.constructor}`}>
            <IngredientsSection
                sectionTitle={TabValues.BUNS}
                itemList={bunList}
                id={TabValues.BUNS}
                ref={refList.buns}
            />
            <IngredientsSection
                sectionTitle={TabValues.SAUCES}
                itemList={sauceList}
                id={TabValues.SAUCES}
                ref={refList.sauces}
            />
            <IngredientsSection
                sectionTitle={TabValues.MAINS}
                itemList={mainList}
                id={TabValues.MAINS}
                ref={refList.mains}
            />
        </div>
    )
}

IngredientsBlock.propTypes = dataPropTypes