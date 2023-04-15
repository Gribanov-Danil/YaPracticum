import { useLocation, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useEffect, useMemo } from "react"
import { wsDisconnect, wsStart } from "../../service/actions/websocket-actions/websocket-actions"
import { WS_ALL, WS_USER } from "../../utils/constants/websocket"
import { TOrderItem } from "../../utils/models/websocket-types/types"
import { TIngredient } from "../../utils/models/ingredient-types/types"
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { IconicText } from "../../ui/iconic-text/iconic-text"
import styles from "./order-information.module.css"
import uuid from "react-uuid"

import { OrderIngredientInformation } from "../order-ingredient-information/order-ingredient-information"

export const OrderInformation = () => {
  const location = useLocation()
  const { id } = useParams()
  const { orders } = useAppSelector((state) => state.websocketReducer)
  const { dataArray } = useAppSelector((state) => state.ingredientsReducer)
  const dispatch = useAppDispatch()

  const background = location.state?.background

  useEffect(() => {
    if (!background && !orders?.orders?.length) {
      !location.pathname.startsWith("/profile/orders")
        ? dispatch(wsStart(WS_ALL))
        : dispatch(wsStart(WS_USER))
    }
    return () => {
      if (!background) dispatch(wsDisconnect())
    }
  }, [dispatch])

  const currentOrder = useMemo<TOrderItem | null>(
    () => (orders?.orders ? orders.orders.find((order) => order._id === id) || null : null),
    [id, orders],
  )

  const processOrder = (order: string[]): [string, number][] => {
    const counted = order.reduce((acc: Record<string, number>, v: string) => {
      return { ...acc, [v]: (acc[v] || 0) + 1 }
    }, {})
    return Object.entries(counted)
  }

  const processedOrder = useMemo<[TIngredient, number][]>(
    () =>
      currentOrder
        ? processOrder(currentOrder?.ingredients).map(
            (ingredientTuple) =>
              [
                dataArray.find((ingredient) => ingredient._id === ingredientTuple[0]),
                ingredientTuple[1],
              ] as [TIngredient, number],
          )
        : [],
    [currentOrder, dataArray],
  )

  const orderAmount = useMemo<number>(
    () =>
      currentOrder
        ? currentOrder.ingredients.reduce((acc, id) => {
            return acc + (dataArray.find((ingredient) => ingredient._id === id)?.price || 0)
          }, 0)
        : 0,
    [currentOrder, dataArray],
  )
  return (
    <>
      {background && (
        <p className={`text text_type_digits-default mb-10 mt-10 mr-10 ml-10`}>
          {currentOrder && `#${currentOrder?.number.toString().padStart(6, "0") || "00000"}`}
        </p>
      )}
      <div className={`ml-10 mr-10 mb-10 ${background ? styles.bodyModal : styles.bodyPage}`}>
        <div>
          {!background && (
            <p className={"text text_type_digits-default mb-10"}>
              {currentOrder && `#${currentOrder?.number || "00000"}`}
            </p>
          )}
        </div>
        <>
          <p className={`text text_type_main-medium mb-3`}>{currentOrder?.name || "Error"}</p>
          <p className={`${styles.status} mb-15 text text_type_main-default`}>Выполнен</p>
          <p className="text text_type_main-medium mb-6">Состав:</p>
          <div className={styles.ingredients}>
            {processedOrder.map((ingredient) => (
              <OrderIngredientInformation
                key={uuid()}
                src={ingredient[0].image_mobile}
                count={ingredient[1]}
                name={ingredient[0].name}
                price={ingredient[0].price}
              />
            ))}
          </div>
          <div className={`${styles.footer} mt-10`}>
            <span className={"text text_type_main-default text_color_inactive"}>
              <FormattedDate date={new Date(currentOrder?.createdAt || "")} />
            </span>
            <IconicText
              text={`${orderAmount}`}
              textClass={"text text_type_digits-default"}
              iconLocation={"right"}
              gapInPx={8}
              icon={<CurrencyIcon type="primary" />}
            />
          </div>
        </>
      </div>
    </>
  )
}
