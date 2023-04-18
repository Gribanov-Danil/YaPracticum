import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { wsDisconnect, wsStart } from "../../service/actions/websocket-actions/websocket-actions"
import { OrderCard } from "../../components/order-card/order-card"
import styles from "./user-orders-page.module.css"
import { getCookie } from "../../service/cookies/getCookie"

export const UserOrdersPage = () => {
  const dispatch = useAppDispatch()
  const { wsConnected, orders } = useAppSelector((state) => state.websocketReducer)

  useEffect(() => {
    dispatch(wsStart(`wss://norma.nomoreparties.space/orders?token=${getCookie("token")}`))
    return () => {
      dispatch(wsDisconnect())
    }
  }, [])

  if (!wsConnected) return null
  else
    return (
      <div className={`${styles.orders}`}>
        {orders?.orders?.length
          ? orders.orders.map((order) => <OrderCard order={order} key={order._id} />).reverse()
          : null}
      </div>
    )
}
