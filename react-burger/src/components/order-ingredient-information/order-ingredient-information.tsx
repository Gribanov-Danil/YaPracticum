import React, { FC } from "react"
import styles from "./order-ingredient-information.module.css"
import uuid from "react-uuid"
import { IngredientIcon } from "../../ui/ingredient-icon/ingredient-icon"
import { IconicText } from "../../ui/iconic-text/iconic-text"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

interface IOrderIngredientInformation {
  src?: string
  count?: number
  name?: string
  price?: number
}

export const OrderIngredientInformation: FC<IOrderIngredientInformation> = ({
  src,
  name,
  count = 1,
  price,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.ingredient_info}>
        <div>
          <IngredientIcon key={uuid()} src={src || ""} srcSet={src || ""} extraClass="mr-4" />
        </div>

        <p className="text text_type_main-default">{name || ""}</p>
      </div>
      <IconicText
        text={`${count} x ${price || 0}`}
        textClass={"text text_type_digits-default"}
        iconLocation={"right"}
        gapInPx={8}
        icon={<CurrencyIcon type="primary" />}
      />
    </div>
  )
}
