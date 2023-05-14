import { FC } from "react"
import { TIngredient } from "../../utils/models/ingredient-types/types"
import styles from "./closing-bun.module.css"
import { ConstructorElement } from "../../hocs/constructor-element/constructor-element"

interface IClosingBun {
  bun: TIngredient
}

export const ClosingBun: FC<IClosingBun> = ({ bun }) => {
  return (
    <div className={styles.bun}>
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
