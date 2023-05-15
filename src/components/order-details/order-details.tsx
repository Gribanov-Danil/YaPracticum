import styles from "./order-details.module.css"
import { FC } from "react"
import { useAppSelector } from "../../hooks/redux"

/**
 * Модальное окно деталей заказа
 */
export const OrderDetails: FC = () => {
  const state = useAppSelector((state) => state.orderDetailsReducer)
  const orderNumberStr = String(state.id).padStart(5, "0")
  return (
    <>
      {state.status.isError && (
        <p
          className={`${styles.order_number} text text_type_main-large`}
        >{`Ошибка при выполнении заказа`}</p>
      )}
      {state.status.isLoading && (
        <p className={`${styles.order_number} text text_type_main-large`}>{`Загрузка...`}</p>
      )}
      {!(state.status.isLoading || state.status.isError) && (
        <p
          className={`${styles.order_number} text text_type_digits-large`}
          data-cy={"order-details"}
        >
          {`${orderNumberStr}`}
        </p>
      )}
      <span className={`text text_type_main-medium mb-15 ${styles.order_description}`}>
        идентификатор заказа
      </span>
      <div className={styles.image_container}>
        <img src={require("../../assets/images/done.png")} alt={"Done"} />
      </div>
      <span className={`${styles.ready_order} text text_type_main-default`}>
        Ваш заказ начали готовить
      </span>
      <span className={`${styles.wait_order} text text_type_main-default text_color_inactive`}>
        Дождитесь готовности на орбитальной станции
      </span>
    </>
  )
}
