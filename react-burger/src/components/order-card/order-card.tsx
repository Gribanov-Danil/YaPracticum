import styles from "./order-card-styles.module.css"
import { FC } from "react"
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { IconifyText } from "../../ui/iconfyText/IconifyText"
import { useAppSelector } from "../../hooks/redux"
import { IngredientIcon } from "../../ui/ingredient-icon/ingredient-icon"
import uuid from "react-uuid"
import { TOrderItem } from "../../utils/models/websocket-types/types"
import { Link, useLocation } from "react-router-dom"

type TOrderCard = {
  order: TOrderItem
}

export const OrderCard: FC<TOrderCard> = ({ order }) => {
  const state = useAppSelector((state) => state.ingredientsReducer)
  const ingredients = state.dataArray

  const getIngredient = (ingredientId: string) =>
    ingredients.find((ingredient) => ingredient._id === ingredientId)

  const getIngredientImageSrc = (ingredientId: string) => {
    const ingredient = getIngredient(ingredientId)
    return ingredient?.image
  }
  const location = useLocation()
  let orderAmount = order.ingredients.reduce((amount, currentItem) => {
    let ingredient = getIngredient(currentItem)
    if (ingredient?.price) {
      return amount + ingredient?.price
    }
    return amount
  }, 0)
  return (
    <div className={styles.card}>
      <Link to={`${location.pathname}/${order?._id}`} state={{ background: location }}>
        <div className="p-6">
          <div className={`mb-6 ${styles.head}`}>
            <div className={`text text_type_digits-default ${styles.number}`}>#{order.number}</div>
            <div className="text text_type_main-default text_color_inactive">
              <FormattedDate date={new Date(order.createdAt)} />
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text text_type_main-medium">{order.name}</h3>
          </div>
          <div className={styles.info}>
            <ul className={styles.ingredients}>
              {order.ingredients.map((ingredient, index) => {
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
                text={`${orderAmount}`}
                textClass={"text text_type_digits-default"}
                iconLocation={"right"}
                gapInPx={8}
                icon={<CurrencyIcon type="primary" />}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
