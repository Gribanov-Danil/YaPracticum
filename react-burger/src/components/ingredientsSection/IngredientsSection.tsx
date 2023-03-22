import constructorStyle from "../ingredientsBlock/ingredientsBlock.module.css";
import {IngredientItem} from "../ingredientItem/IngredientItem";
import uuid from 'react-uuid';
import {forwardRef, memo} from "react";
import {IIngredient} from "../../utils/interfaces";

interface IIngredientsSection {
    sectionTitle: string
    itemList: IIngredient[]
    id: string
}

export const IngredientsSection = memo<IIngredientsSection>(forwardRef(({sectionTitle, itemList, id}, ref) => {
    // TODO разобраться ts-ignore
    return (
        <section className={constructorStyle.section}>
            <div className="mb-6">
                <p
                    className="text text_type_main-medium"
                    id={id}
                    // @ts-ignore
                    ref={ref}
                >
                    {sectionTitle}
                </p>
            </div>
                <div className={constructorStyle.type_container}>
                    {itemList.map((item, index) => (
                        <IngredientItem
                            key={uuid()}
                            index={index}
                            ingredient={item}
                            collectionLength={itemList.length}
                        />
                    ))}
                </div>
        </section>
    )
}))
