import styles from "./feed-styles.module.css"
import { OrderCard } from "../../components/order-card/order-card"
import { OrdersNumberBlock } from "../../ui/orders-number-block/orders-number-block"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { useEffect } from "react"
import { wsDisconnect, wsStart } from "../../service/actions/websocket-actions/websocket-actions"
import { WS_ALL } from "../../utils/constants/websocket"
import uuid from "react-uuid"
import { TOrderItem } from "../../utils/models/websocket-types/types"

export const FeedPage = () => {
  const dispatch = useAppDispatch()
  const { orders } = useAppSelector((state) => state.websocketReducer)

  useEffect(() => {
    dispatch(wsStart(WS_ALL))
    return () => {
      dispatch(wsDisconnect())
    }
  }, [dispatch])

  const getFilteredOrders = (orders: TOrderItem[] | undefined, status: string) => {
    return orders ? orders.filter((order) => order.status === status).slice(0, 10) : []
  }

  return (
    <>
      <div className={styles.content}>
        <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
        <div className={styles.container}>
          <div className={styles.feed}>
            {orders?.orders.map((order) => (
              <OrderCard key={uuid()} order={order} />
            ))}
          </div>
          <div className={styles.infographic}>
            <div className={`mb-15 ${styles.orders_info}`}>
              <div className={styles.completed_orders}>
                <OrdersNumberBlock
                  title={"Готовы:"}
                  orders={getFilteredOrders(orders?.orders, "done")}
                  extraClass="blue_text"
                />
              </div>
              <div className={styles.completed_orders}>
                <OrdersNumberBlock
                  orders={getFilteredOrders(orders?.orders, "pending")}
                  title={"В работе:"}
                />
              </div>
            </div>
            <div className={`mb-15 ${styles.orders_stat}`}>
              <h4 className="text text_type_main-medium">Выполнено за всё время:</h4>
              <span className="text text_type_digits-large">{orders?.total}</span>
            </div>
            <div className={styles.orders_stat}>
              <h4 className="text text_type_main-medium">Выполнено за сегодня:</h4>
              <span className="text text_type_digits-large">{orders?.totalToday}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
