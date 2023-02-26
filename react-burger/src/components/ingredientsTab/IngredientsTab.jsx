import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import tabStyles from "./ingredientsTab.module.css"
import uuid from "react-uuid";
import PropTypes from "prop-types";

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

IngredientsTab.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ref: PropTypes.object.isRequired,
    })),
    handleTabScroll: PropTypes.func.isRequired,
    current: PropTypes.string.isRequired,
}