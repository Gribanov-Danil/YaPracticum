import styles from "./orderDetails.module.css"
import {useSelector} from "react-redux";

export const OrderDetails = () => {
    let orderNumberStr = useSelector(state => state.orderDetailsReducer)
    orderNumberStr = String(orderNumberStr.id).padStart(5, '0');
    return (
        <>
            <p className={`${styles.order_number} text text_type_digits-large`}>{`${orderNumberStr}`}</p>
            <span className={`text text_type_main-medium mb-15 ${styles.order_description}`}>идентификатор заказа</span>
            <div className={styles.image_container}>
                <img src={require("../../images/done.png")} alt={"Done"}/>
            </div>
            <span className={`${styles.ready_order} text text_type_main-default`}>Ваш заказ начали готовить</span>
            <span className={`${styles.wait_order} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</span>
        </>
    )
}
