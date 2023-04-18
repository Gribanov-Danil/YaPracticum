import constructorStyle from "./ingredients-block.module.css"
import { IngredientsSection } from "../ingredients-section/ingredients-section"
import { TabValue } from "../../utils/constants/tabValue"
import { FC, RefObject } from "react"
import { IngredientsSliceState } from "../../service/reducers/ingredientsSlice"
import { useAppSelector } from "../../hooks/redux"

interface IIngredientsBlock {
  refList: {
    buns: RefObject<HTMLParagraphElement>
    sauces: RefObject<HTMLParagraphElement>
    mains: RefObject<HTMLParagraphElement>
  }
}

export const IngredientsBlock: FC<IIngredientsBlock> = ({ refList }) => {
  const state: IngredientsSliceState = useAppSelector((state) => state.ingredientsReducer)
  const data = state.dataArray
  const bunList = data.filter((ingredient) => ingredient.type === "bun")
  const mainList = data.filter((ingredient) => ingredient.type === "main")
  const sauceList = data.filter((ingredient) => ingredient.type === "sauce")
  return (
    <div className={`ingredients_block ${constructorStyle.constructor}`}>
      <IngredientsSection
        sectionTitle={TabValue.BUNS}
        itemList={bunList}
        id={TabValue.BUNS}
        ref={refList.buns}
      />
      <IngredientsSection
        sectionTitle={TabValue.SAUCES}
        itemList={sauceList}
        id={TabValue.SAUCES}
        ref={refList.sauces}
      />
      <IngredientsSection
        sectionTitle={TabValue.MAINS}
        itemList={mainList}
        id={TabValue.MAINS}
        ref={refList.mains}
      />
    </div>
  )
}
