import {IngredientsTab} from "../ingredientsTab/IngredientsTab";
import {IngredientsBlock} from "../ingredientsBlock/IngredientsBlock";
import {useEffect, useRef, useState} from "react";
import {TabValues} from "../../utils/constants/tabValues";
import {useSelector} from "react-redux";

export const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = useState(TabValues.BUNS);

    const bunsRef = useRef();
    const saucesRef = useRef();
    const mainRef = useRef();
    const refList = {
        buns: bunsRef,
        sauces: saucesRef,
        mains: mainRef
    }
    const tabs = [
        { value: TabValues.BUNS, title: TabValues.BUNS, ref: bunsRef},
        { value: TabValues.SAUCES, title: TabValues.SAUCES, ref: saucesRef},
        { value: TabValues.MAINS, title: TabValues.MAINS, ref: mainRef},
    ];

    const getState = (state) => state.ingredientDetailsReducer
    const state = useSelector(getState)
    const ingredients = state.dataArray

    let visibleHeaders = {};
    const handleObserve = (entries) => {
        for (const entry of entries) {
            visibleHeaders[entry.target.id] = entry.isIntersecting;
        }
        for (const header in visibleHeaders) {
            if (visibleHeaders[header]) {
                setCurrentTab(header);
                break;
            }
        }
    };

    const handleTabScroll = (value, element) => {
        setCurrentTab(value);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(handleObserve, {
            root: document.querySelector('.ingredients_block'),
        });
        [bunsRef, saucesRef, mainRef].forEach((section) =>
            sectionObserver.observe(section.current)
        );
    }, [ingredients]);

    return (
        <div className="mt-10 mb-10 mr-10">
            <p className="mb-5 text text_type_main-large">
                Соберите бургер
            </p>
            <IngredientsTab
                tabs={tabs}
                handleTabScroll={handleTabScroll}
                current={currentTab}
            />
            <IngredientsBlock refList={refList}/>
        </div>
    )
}
