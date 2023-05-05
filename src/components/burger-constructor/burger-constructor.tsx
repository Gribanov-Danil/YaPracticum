import { ConstructorPanel } from "../constructor-panel/constructor-panel"
import { PlaceOrder } from "../place-order/place-order"
import { FC } from "react"
import styles from "./burger-constructor.module.css"

export const BurgerConstructor: FC = () => {
  return (
    <div className={`mt-25 ${styles.constructor_container}`}>
      <ConstructorPanel />
      <PlaceOrder />
    </div>
  )
}
