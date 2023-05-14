import tabStyles from "./ingredients-tab.module.css"
import { FC } from "react"
import { ITab } from "../burger-ingredients/burger-ingredients"
import { TabValue } from "../../utils/constants/tab-value"
import { Tab } from "../../ui/tab/tab"
import { getScreenType } from "../../utils/getScreenType"

interface IIngredientsTab {
  tabs: ITab[]
  handleTabScroll: (value: TabValue, element: HTMLParagraphElement | null) => void
  current: string
}

export const IngredientsTab: FC<IIngredientsTab> = ({ tabs, handleTabScroll, current }) => {
  const screenType = getScreenType()
  return (
    <div className={`mb-10 ${tabStyles.tab}`}>
      {tabs.map((tab, index) => (
        <Tab
          active={current === tab.value}
          value={tab.value}
          key={index}
          onClick={() => handleTabScroll(tab.value, tab.ref.current)}
          extraClass={screenType === "desktop" ? "pt-4 pb-4" : "pt-4 pb-4"}
        >
          {tab.title}
        </Tab>
      ))}
    </div>
  )
}
