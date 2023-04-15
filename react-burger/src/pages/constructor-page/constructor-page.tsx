import pageStyle from "./page.module.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { BurgerIngredients } from "../../components/burger-ingredients/burger-ingredients"
import { BurgerConstructor } from "../../components/burger-constructor/burger-constructor"
import { FC } from "react"
import { useAppSelector } from "../../hooks/redux"

export const ConstructorPage: FC = () => {
  const state = useAppSelector((state) => state.ingredientsReducer)
  return (
    <main className={pageStyle.page}>
      {state.status.isError && (
        <h1 className={"text text_type_main-large"}>Произошла ошибка при загрузке данных</h1>
      )}
      {state.status.isLoading && <h1 className={"text text_type_main-large"}>Загрузка...</h1>}
      {!state.status.isLoading && !state.status.isError && Object.keys(state.dataArray).length && (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </main>
  )
}
