import { FC } from "react"
import { TIngredient } from "../../utils/models/ingredient-types/types"
import { ConstructorElement } from "../constructor-element/constructor-element"

interface IOpenBun {
  bun: TIngredient
}

export const OpenBun: FC<IOpenBun> = ({ bun }) => {
  return (
    <div className="ml-8">
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${bun.name} (верх)`}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  )
}
