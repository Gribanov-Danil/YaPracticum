import constructorStyle from "../ingredientsBlock/ingredientsBlock.module.css";
import {IngredientItem} from "../ingredientItem/IngredientItem";
import uuid from 'react-uuid';
import {forwardRef, memo} from "react";


export const IngredientsSection = memo(forwardRef(({sectionTitle, itemList, id, handleOpenModal}, ref) => {
    return (
        <section className={constructorStyle.section}>
            <div className="mb-6">
                <p className="text text_type_main-medium" id={id} ref={ref}>
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
                            src={item.image}
                            price={item.price}
                            name={item.name}
                            handleOpenModal={handleOpenModal}
                        />
                    ))}
                </div>
        </section>
    )
}))

// IngredientsSection.propTypes = {
//     sectionTitle: PropTypes.string.isRequired,
//     itemList: PropTypes.arrayOf(
//         PropTypes.shape(dataElementWithCustomFieldPropTypes("itemList")))
// }