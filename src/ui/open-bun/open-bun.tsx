import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { FC } from "react"
import { TIngredient } from "../../utils/models/ingredient-types/types"

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
