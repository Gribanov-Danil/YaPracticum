import { FC } from "react"
import { TIngredient } from "../../utils/models/ingredient-types/types"
import styles from "./open-bun.module.css"
import { ConstructorElement } from "../../hocs/constructor-element/constructor-element"

interface IOpenBun {
  bun: TIngredient
}

export const OpenBun: FC<IOpenBun> = ({ bun }) => {
  return (
    <div className={styles.bun}>
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
