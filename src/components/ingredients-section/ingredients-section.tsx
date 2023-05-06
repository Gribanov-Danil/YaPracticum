import constructorStyle from "../ingredients-block/ingredients-block.module.css"
import { IngredientItem } from "../ingredient-item/ingredient-item"
import { forwardRef } from "react"
import { TIngredient } from "../../utils/models/ingredient-types/types"

interface IIngredientsSection {
  sectionTitle: string
  itemList: TIngredient[]
  id: string
}

export const IngredientsSection = forwardRef<HTMLParagraphElement, IIngredientsSection>(
  ({ sectionTitle, itemList, id }, ref) => {
    return (
      <section className={constructorStyle.section}>
        <div className="mb-6">
          <p className="text text_type_main-medium" id={id} ref={ref}>
            {sectionTitle}
          </p>
        </div>
        <div className={constructorStyle.type_container}>
          {itemList.map((item, index) => (
            <IngredientItem key={index} ingredient={item} />
          ))}
        </div>
      </section>
    )
  },
)
