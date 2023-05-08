import pageStyle from "./page.module.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { BurgerIngredients } from "../../components/burger-ingredients/burger-ingredients"
import { BurgerConstructor } from "../../components/burger-constructor/burger-constructor"
import { FC } from "react"
import { useAppSelector } from "../../hooks/redux"
import { PlaceOrder } from "../../components/place-order/place-order"

export const ConstructorPage: FC = () => {
  const state = useAppSelector((state) => state.ingredientsReducer)
  const toggleScreen = () => {
    const burgerIngredients = document.querySelector("#BurgerIngredients")
    const burgerConstructor = document.querySelector("#BurgerConstructor")
    const mainHeader = document.querySelector("#pageHeader")
    burgerConstructor?.classList.toggle("inactive")
    burgerIngredients?.classList.toggle("inactive")
    mainHeader?.classList.toggle("inactive")
    mainHeader?.classList.toggle("header")
  }
  return (
    <>
      <main className={pageStyle.page}>
        {state.status.isError && (
          <h1 className={"text text_type_main-large"}>Произошла ошибка при загрузке данных</h1>
        )}
        {state.status.isLoading && <h1 className={"text text_type_main-large"}>Загрузка...</h1>}
        {!state.status.isLoading &&
          !state.status.isError &&
          Object.keys(state.dataArray).length && (
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          )}
      </main>
      <div className={pageStyle.amount_order}>
        <PlaceOrder
          buttonTitle="Смотреть заказ"
          extraClass={pageStyle.placeOrder_mobile}
          onClick={toggleScreen}
        />
      </div>
    </>
  )
}
