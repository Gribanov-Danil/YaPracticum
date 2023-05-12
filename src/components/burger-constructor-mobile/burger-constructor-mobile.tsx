import "./burger-constructor-mobile.css"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { toggleScreen } from "../../utils/toggle-constructor-screen"
import { DraggableIngredientsBlock } from "../draggable-ingredients-block/draggable-ingredients-block"

export const BurgerConstructorMobile = () => {
  return (
    <div id="BurgerConstructorMobile" className="burger_constructor_container inactive">
      <header className="mobile_constructor_header">
        <h2 className="text text_type_main-large burger_constructor_title">Заказ</h2>
        <CloseIcon type="primary" onClick={toggleScreen} />
      </header>
      <section className="burger_constructor">
        <DraggableIngredientsBlock />
      </section>
    </div>
  )
}
