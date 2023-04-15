import { Tab } from "@ya.praktikum/react-developer-burger-ui-components"
import tabStyles from "./ingredients-tab.module.css"
import uuid from "react-uuid"
import { FC } from "react"
import { ITab } from "../burger-ingredients/burger-ingredients"
import { TabValue } from "../../utils/constants/tabValue"

interface IIngredientsTab {
  tabs: ITab[]
  handleTabScroll: (value: TabValue, element: HTMLParagraphElement | null) => void
  current: string
}

export const IngredientsTab: FC<IIngredientsTab> = ({ tabs, handleTabScroll, current }) => {
  return (
    <div className={`mb-10 ${tabStyles.tab}`}>
      {tabs.map((tab) => (
        <Tab
          active={current === tab.value}
          value={tab.value}
          key={uuid()}
          onClick={() => handleTabScroll(tab.value, tab.ref.current)}
        >
          {tab.title}
        </Tab>
      ))}
    </div>
  )
}
