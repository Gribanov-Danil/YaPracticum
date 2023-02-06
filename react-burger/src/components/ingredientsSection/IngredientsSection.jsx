import constructorStyle from "../ingredientsBlock/ingredientsBlock.module.css";
import {IngredientItem} from "../ingredientItem/IngredientItem";
import PropTypes from "prop-types";


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
    itemList: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number,
    })),
}