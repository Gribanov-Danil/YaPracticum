import PropTypes from "prop-types";

export const ingredientInterface = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
})


export const dataPropTypes = {
    data: PropTypes.arrayOf(ingredientInterface),
}

export const dataElementWithCustomFieldPropTypes = (fieldName) =>  {
    return ({ [fieldName]: ingredientInterface})
}




export const ingredientObjectWithCustomFieldPropTypes = {
    ingredientObj: PropTypes.shape({
        id: PropTypes.string.isRequired,
        ingredient: ingredientInterface
    })
}

export const ingredientObjectPropTypes = {
    data: PropTypes.arrayOf(ingredientObjectWithCustomFieldPropTypes),
}