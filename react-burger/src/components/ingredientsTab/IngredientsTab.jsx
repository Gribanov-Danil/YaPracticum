import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import tabStyles from "./ingredientsTab.module.css"
import uuid from "react-uuid";



export const IngredientsTab = ({ tabs, handleTabScroll, current }) => {
    return (
        <div className={`mb-10 ${tabStyles.tab}`}>
            {
                tabs.map((tab) => (
                    <Tab
                        active={current === tab.value}
                        value={tab.value}
                        key={uuid()}
                        onClick={() => handleTabScroll(tab.value, tab.ref.current)}
                    >
                        {tab.title}
                    </Tab>
                ))
            }
        </div>
    )
}

//TODO пропс