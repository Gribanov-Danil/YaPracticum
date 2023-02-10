import {useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import tabStyles from "./ingredientsTab.module.css"

export const IngredientsTab = () => {
    const [current, setCurrent] = useState('Булки')
    return (
        <div className={`mb-10 ${tabStyles.tab}`}>
            <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}