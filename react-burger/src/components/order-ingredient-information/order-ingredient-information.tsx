import React, { FC } from "react"
import styles from "./order-ingredient-information.module.css"
import uuid from "react-uuid"
import { IngredientIcon } from "../../ui/ingredient-icon/ingredient-icon"
import { IconifyText } from "../../ui/iconfyText/IconifyText"
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
      <IngredientIcon key={uuid()} src={src || ""} srcSet={src || ""} extraClass="mr-4" />
      <p className="text text_type_main-default">{name || ""}</p>
      <IconifyText
        text={`${count} x ${price || 0}`}
        textClass={""}
        iconLocation={"right"}
        gapInPx={8}
        icon={<CurrencyIcon type="primary" />}
      />
    </div>
  )
}
