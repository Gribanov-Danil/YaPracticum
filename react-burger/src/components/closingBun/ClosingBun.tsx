import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { FC } from "react"
import { TIngredient } from "../../utils/models/ingredient-types/types"

interface IClosingBun {
  bun: TIngredient
}

export const ClosingBun: FC<IClosingBun> = ({ bun }) => {
  return (
    <div className="ml-8">
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${bun.name} (низ)`}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  )
}
