import { ConstructorPanel } from "../constructorPanel/ConstructorPanel"
import { PlaceOrder } from "../placeOrder/PlaceOrder"
import { FC } from "react"

export const BurgerConstructor: FC = () => {
  return (
    <div className="mt-25">
      <ConstructorPanel />
      <PlaceOrder />
    </div>
  )
}
