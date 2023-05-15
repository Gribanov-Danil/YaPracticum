import characteristicStyles from "./ingredient-characteristic.module.css"
import { FC } from "react"

interface IIngredientCharacteristic {
  title: string
  characteristic: number
}

/**
 * Характеристика ингредиента для попапа
 * @param title название характеристики
 * @param characteristic значение характеристики
 */
export const IngredientCharacteristic: FC<IIngredientCharacteristic> = ({
  title,
  characteristic,
}) => {
  return (
    <div className={characteristicStyles.characteristic}>
      <p className="text text_type_main-default text_color_inactive mb-2">{title}</p>
      <p className="text text_type_digits-default text_color_inactive">{characteristic}</p>
    </div>
  )
}
