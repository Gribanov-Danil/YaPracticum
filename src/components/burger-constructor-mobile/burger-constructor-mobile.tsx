import "./burger-constructor-mobile.css"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { toggleScreen } from "../../utils/toggle-constructor-screen"
import { DraggableIngredientsBlock } from "../draggable-ingredients-block/draggable-ingredients-block"
import { OpenBun } from "../../ui/open-bun/open-bun"
import { useAppSelector } from "../../hooks/redux"
import { ClosingBun } from "../../ui/closing-bun/closing-bun"

/**
 * Конструкор бургеров для мобилок
 */
export const BurgerConstructorMobile = () => {
  const state = useAppSelector((state) => state.pickedIngredientsReducer)
  const pickedBun = state.pickedBun
  return (
    <div id="BurgerConstructorMobile" className="burger_constructor_container inactive">
      <header className="mobile_constructor_header">
        <h2 className="text text_type_main-large burger_constructor_title">Заказ</h2>
        <CloseIcon type="primary" onClick={toggleScreen} />
      </header>
      <section className="burger_constructor">
        {pickedBun && <OpenBun bun={pickedBun} />}
        <DraggableIngredientsBlock />
        {pickedBun && <ClosingBun bun={pickedBun} />}
      </section>
    </div>
  )
}
