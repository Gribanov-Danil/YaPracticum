import styles from "./order-card-styles.module.css"
import { FC } from "react"
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { IconifyText } from "../../ui/iconfyText/IconifyText"
import { useAppSelector } from "../../hooks/redux"
import { IngredientIcon } from "../../ui/ingredient-icon/ingredient-icon"
import uuid from "react-uuid"

export type TOrder = {
  ingredients: string[]
  name: string
  _id: string
  status: string
  number: number
  createdAt: string
  updatedAt: string
}

type test = {
  order: TOrder
}

export const OrderCard: FC<test> = (order) => {
  const state = useAppSelector((state) => state.ingredientsReducer)
  const ingredients = state.dataArray
  const getIngredientImageSrc = (ingredientId: string) => {
    const ingredient = ingredients.find((ingredient) => ingredient._id === ingredientId)
    console.log(ingredients, ingredientId)
    return ingredient?.image
  }
  return (
    <div className={styles.card}>
      <div className="p-6">
        <div className={`mb-6 ${styles.head}`}>
          <div className={`text text_type_digits-default ${styles.number}`}>
            #{order.order.number}
          </div>
          <div className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.order.createdAt)} />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text text_type_main-medium">{order.order.name}</h3>
        </div>
        <div className={styles.info}>
          <ul className={styles.ingredients}>
            {order.order.ingredients.map((ingredient, index) => {
              const src = getIngredientImageSrc(ingredient)
              if (src) {
                return (
                  <IngredientIcon
                    key={uuid()}
                    src={src}
                    srcSet={src}
                    overflow={index - 6}
                    extraClass="items_picture"
                  />
                )
              }
            })}
          </ul>
          <div className={styles.summary}>
            <IconifyText
              text={"480"}
              textClass={"text text_type_digits-default"}
              iconLocation={"right"}
              gapInPx={8}
              icon={<CurrencyIcon type="primary" />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
