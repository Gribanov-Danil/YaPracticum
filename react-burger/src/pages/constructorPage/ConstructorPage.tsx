import pageStyle from "./page.module.css"
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {BurgerIngredients} from "../../components/burgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "../../components/burgerConstructor/burgerConstructor";
import {useSelector} from "react-redux";
import {FC} from "react";
import {GetStateManager} from "../../utils/getStateManager";

export const ConstructorPage: FC = () => {
    const state = useSelector(GetStateManager.GetIngredients())
    return (
            <main className={pageStyle.page}>
                {state.status.isError &&  <h1 className={"text text_type_main-large"}>Произошла ошибка при загрузке данных</h1>}
                {state.status.isLoading && <h1 className={"text text_type_main-large"}>Загрузка...</h1> }
                {!state.status.isLoading && !state.status.isError && Object.keys(state.dataArray).length && (
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients/>
                        <BurgerConstructor/>
                    </DndProvider>
                )}
            </main>
    )
}