import constructorStyle from "./ingredientsBlock.module.css"
import {IngredientsSection} from "../ingredientsSection/IngredientsSection";
import {useSelector} from "react-redux";
import {TabValue} from "../../utils/constants/tabValue";
import {FC} from "react";
import {IngredientsSliceState} from "../../service/reducers/ingredientsSlice";

// TODO разобраться refList
interface IIngredientsBlock {
    refList: {
        buns: {}
        sauces: {}
        mains: {}
    }
}

export const IngredientsBlock: FC<IIngredientsBlock> = ({refList}) => {
    // TODO разобраться state: any
    const getState = (state: any) => state.ingredientsReducer
    const state: IngredientsSliceState = useSelector(getState)
    const data = state.dataArray
    const bunList = data.filter((ingredient) => ingredient.type === "bun" )
    const mainList = data.filter((ingredient) => ingredient.type === "main" )
    const sauceList = data.filter((ingredient) => ingredient.type === "sauce" )
    // TODO разобраться ts-ignore
    return (
        <div className={`ingredients_block ${constructorStyle.constructor}`}>
            <IngredientsSection
                sectionTitle={TabValue.BUNS}
                itemList={bunList}
                id={TabValue.BUNS}
                // @ts-ignore
                ref={refList.buns}
            />
            <IngredientsSection
                sectionTitle={TabValue.SAUCES}
                itemList={sauceList}
                id={TabValue.SAUCES}
                // @ts-ignore
                ref={refList.sauces}
            />
            <IngredientsSection
                sectionTitle={TabValue.MAINS}
                itemList={mainList}
                id={TabValue.MAINS}
                // @ts-ignore
                ref={refList.mains}
            />
        </div>
    )
}