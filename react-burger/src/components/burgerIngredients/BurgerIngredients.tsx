import {IngredientsTab} from "../ingredientsTab/IngredientsTab";
import {IngredientsBlock} from "../ingredientsBlock/IngredientsBlock";
import {RefObject, useEffect, useRef, useState} from "react";
import {TabValue} from "../../utils/constants/tabValue";

export interface ITab {
    value: TabValue
    title: TabValue
    ref: RefObject<HTMLParagraphElement>
}

type THeaders = {[name in TabValue]: boolean}

function isTabValue (checkedString: string): checkedString is TabValue {
    return (checkedString === "Булки" || checkedString === "Соусы" || checkedString === "Начинки")
}

export const BurgerIngredients = () => {
    const [currentTab, setCurrentTab] = useState(TabValue.BUNS);

    const bunsRef = useRef<HTMLParagraphElement>(null);
    const saucesRef = useRef<HTMLParagraphElement>(null);
    const mainRef = useRef<HTMLParagraphElement>(null);
    const refList = {
        buns: bunsRef,
        sauces: saucesRef,
        mains: mainRef
    }
    const tabs: ITab[] = [
        { value: TabValue.BUNS, title: TabValue.BUNS, ref: bunsRef},
        { value: TabValue.SAUCES, title: TabValue.SAUCES, ref: saucesRef},
        { value: TabValue.MAINS, title: TabValue.MAINS, ref: mainRef},
    ];

    let visibleHeaders: THeaders = {
        "Булки": false,
        "Соусы": false,
        "Начинки": false,
    };

    const handleObserve = (entries: IntersectionObserverEntry[]) => {
        for (const entry of entries) {
            if (isTabValue(entry.target.id)) {
                visibleHeaders[entry.target.id] = entry.isIntersecting;
            }
        }
        for (const header in visibleHeaders) {
            if (isTabValue(header) && visibleHeaders[header]) {
                setCurrentTab(header);
                break;
            }
        }
    };

    const handleTabScroll = (value: TabValue, element: HTMLParagraphElement | null) => {
        setCurrentTab(value);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(handleObserve);
        [bunsRef, saucesRef, mainRef].forEach((section) => {
            if (section.current) {
                sectionObserver.observe(section.current)
            }
        });
    }, []);

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