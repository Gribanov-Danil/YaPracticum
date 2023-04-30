import { ConstructorPanel } from "../constructor-panel/constructor-panel"
import { PlaceOrder } from "../place-order/place-order"
import { FC } from "react"

export const BurgerConstructor: FC = () => {
  return (
    <div className="mt-25">
      <ConstructorPanel />
      <PlaceOrder />
    </div>
  )
}
