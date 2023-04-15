import styles from "./orders-number-block.module.css"
import { FC } from "react"
import { TOrderItem } from "../../utils/models/websocket-types/types"
import uuid from "react-uuid"

interface IOrdersNumberBlock {
  title: string
  orders: TOrderItem[]
  extraClass?: string
}

export const OrdersNumberBlock: FC<IOrdersNumberBlock> = ({ title, extraClass, orders }) => {
  return (
    <>
      <h4 className="mb-6 text text_type_main-medium">{title}</h4>
      <ul className={styles.orders_block}>
        {orders.map((order) => {
          return (
            <li
              key={uuid()}
              className={`text text_type_digits-default ${styles.order_number} ${extraClass}`}
            >
              {order.number}
            </li>
          )
        })}
      </ul>
    </>
  )
}
