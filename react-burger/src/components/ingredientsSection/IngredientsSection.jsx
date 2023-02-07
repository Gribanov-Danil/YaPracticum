import constructorStyle from "../ingredientsBlock/ingredientsBlock.module.css";
import {IngredientItem} from "../ingredientItem/IngredientItem";
import PropTypes from "prop-types";
import {dataElementWithCustomFieldPropTypes} from "../../utils/prop-types";


export const IngredientsSection = ({sectionTitle, itemList}) => {
    return (
        <div className={constructorStyle.section}>
            <div className="mb-6">
                <p className="text text_type_main-medium">
                    {sectionTitle}
                </p>
            </div>
            <div className={constructorStyle.type_container}>
                {itemList.map((item, index) => (
                    <IngredientItem
                        key={index}
                        index={index}
                        collectionLength={itemList.length}
                        src={item.image}
                        price={item.price}
                        name={item.name}
                    />
                ))}
            </div>
        </div>
    )
}

IngredientsSection.propTypes = {
    sectionTitle: PropTypes.string,
    itemList: PropTypes.arrayOf(
        PropTypes.shape(dataElementWithCustomFieldPropTypes("itemList")))
}