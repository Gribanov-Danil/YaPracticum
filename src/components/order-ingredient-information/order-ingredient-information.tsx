import React, { FC, useState } from "react"
import styles from "./order-ingredient-information.module.css"
import { IngredientIcon } from "../../ui/ingredient-icon/ingredient-icon"
import { IconicText } from "../../ui/iconic-text/iconic-text"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { TIngredient } from "../../utils/models/ingredient-types/types"

interface IOrderIngredientInformation {
  processedOrder?: [TIngredient, number]
}

/**
 * Информация о ингредиенте из заказа
 * @param processedOrder кортеж обрабатываемого заказа
 */
export const OrderIngredientInformation: FC<IOrderIngredientInformation> = ({ processedOrder }) => {
  const [src] = useState(processedOrder ? processedOrder[0].image_mobile : "")
  return (
    <div className={styles.container}>
      <div className={styles.ingredient_info}>
        <div>
          <IngredientIcon src={src} srcSet={src} extraClass="mr-4" />
        </div>
        <p className="text text_type_main-default">
          {processedOrder ? processedOrder[0].name : ""}
        </p>
      </div>
      <IconicText
        text={`${processedOrder ? processedOrder[1] : 1} x ${
          processedOrder ? processedOrder[0].price : 0
        }`}
        textClass={"text text_type_digits-default"}
        iconLocation={"right"}
        gapInPx={8}
        icon={<CurrencyIcon type="primary" />}
      />
    </div>
  )
}
