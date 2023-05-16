import { ConstructorPanel } from "../constructor-panel/constructor-panel"
import { PlaceOrder } from "../place-order/place-order"
import { FC } from "react"
import styles from "./burger-constructor.module.css"
import { DeleteIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { cleanConstructor } from "../../service/reducers/picked-ingredients-slice/picked-ingredients-slice"

/**
 * Конструкор бургеров для десктопа
 */
export const BurgerConstructor: FC = () => {
  const dispatch = useAppDispatch()
  const handleCleanConstructor = () => dispatch(cleanConstructor())
  const { pickedIngredient, pickedBun } = useAppSelector((state) => state.pickedIngredientsReducer)
  console.log(Object.keys(pickedBun).length)
  console.log(pickedIngredient.length)
  return (
    <div id="BurgerConstructor" className={`mt-25 ${styles.constructor_container}`}>
      <ConstructorPanel />
      <div className={styles.place_order_container}>
        {(Object.keys(pickedBun).length !== 0 || pickedIngredient.length !== 0) && (
          <span className={styles.delete_icon}>
            <DeleteIcon type={"primary"} onClick={handleCleanConstructor} />
          </span>
        )}

        <PlaceOrder extraClass={styles.place_order} />
      </div>
    </div>
  )
}
