import {IngredientsTab} from "../ingredientsTab/IngredientsTab";
import {IngredientsBlock} from "../ingredientsBlock/IngredientsBlock";
import {dataPropTypes} from "../../utils/prop-types";
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
        { value: TabValues.BUNS, ref: bunsRef, title: TabValues.BUNS },
        { value: TabValues.SAUCES, ref: saucesRef, title: TabValues.SAUCES },
        { value: TabValues.MAINS, ref: mainRef, title: TabValues.MAINS},
    ];

    const state = useSelector(state => state.ingredientDetailsReducer)
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



BurgerIngredients.propTypes = dataPropTypes