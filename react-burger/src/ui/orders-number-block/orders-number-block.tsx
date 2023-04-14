import styles from "./orders-number-block.module.css"
import { FC } from "react"

interface IOrdersNumberBlock {
  title: string
  extraClass?: string
}

export const OrdersNumberBlock: FC<IOrdersNumberBlock> = ({ title, extraClass }) => {
  return (
    <>
      <h4 className="mb-6 text text_type_main-medium">{title}</h4>
      <div className={styles.orders_block}>
        <p className={`text text_type_digits-default mb-2 ${styles.extraclass} ${extraClass}`}>
          034533
        </p>
        <p className={`text text_type_digits-default mb-2 ${styles.extraclass} ${extraClass}`}>
          034533
        </p>
        <p className={`text text_type_digits-default mb-2 ${styles.extraclass} ${extraClass}`}>
          034533
        </p>
        <p className={`text text_type_digits-default mb-2 ${styles.extraclass} ${extraClass}`}>
          034533
        </p>
        <p className={`text text_type_digits-default mb-2 ${styles.extraclass} ${extraClass}`}>
          034533
        </p>
      </div>
    </>
  )
}
