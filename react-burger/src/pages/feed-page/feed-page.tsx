import styles from "./feed-styles.module.css"
import { OrderCard, TOrder } from "../../components/order-card/order-card"
import { OrdersNumberBlock } from "../../ui/orders-number-block/orders-number-block"

const mockOrder: TOrder = {
  ingredients: [
    "60d3b41abdacab0026a733c8",
    "60d3b41abdacab0026a733cc",
    "60d3b41abdacab0026a733d0",
    "60d3b41abdacab0026a733d3",
  ],
  name: "biba",
  _id: "Death Star Starship Main бургер",
  status: "done",
  number: 34535,
  createdAt: "2021-06-23T14:43:22.587Z",
  updatedAt: "2021-06-23T14:43:22.603Z",
}

export const FeedPage = () => {
  return (
    <>
      <div className={styles.content}>
        <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
        <div className={styles.container}>
          <div className={styles.feed}>
            <OrderCard order={mockOrder} />
          </div>
          <div className={styles.infographic}>
            <div className={`mb-15 ${styles.orders_info}`}>
              <div className={styles.completed_orders}>
                <OrdersNumberBlock title={"Готовы:"} extraClass="blue_text" />
              </div>
              <div className={styles.completed_orders}>
                <OrdersNumberBlock title={"В работе:"} />
              </div>
            </div>
            <div className={`mb-15 ${styles.orders_stat}`}>
              <h4 className="text text_type_main-medium">Выполнено за всё время:</h4>
              <span className="text text_type_digits-large">28752</span>
            </div>
            <div className={styles.orders_stat}>
              <h4 className="text text_type_main-medium">Выполнено за сегодня:</h4>
              <span className="text text_type_digits-large">138</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
