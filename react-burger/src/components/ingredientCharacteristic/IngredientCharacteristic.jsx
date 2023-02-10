import characteristicStyles from "./ingredientCharacteristic.module.css";

export const IngredientCharacteristic = ({title, characteristic}) => {
    return (
        <div className={characteristicStyles.characteristic}>
            <p className="text text_type_main-default text_color_inactive mb-2">{title}</p>
            <p className="text text_type_digits-default text_color_inactive">{characteristic}</p>
        </div>
    )
}