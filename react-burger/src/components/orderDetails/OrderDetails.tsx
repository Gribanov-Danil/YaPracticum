import styles from "./orderDetails.module.css"
import {useSelector} from "react-redux";
import {FC} from "react";

type TOrderDetailsState = {
    id: string;
    status: {
        isError: boolean;
        isLoading: boolean;
    };
}

export const OrderDetails: FC = () => {
    // TODO разобрать state: any
    const getState = (state: any) => {
        console.log(state)
        return state.orderDetailsReducer
    }

    const state: TOrderDetailsState = useSelector(getState)
    // console.log(state)
    const orderNumberStr = String(state.id).padStart(5, '0');
    return (
        <>
            {state.status.isError &&
                <p className={`${styles.order_number} text text_type_main-large`}>{`Ошибка при выполнении заказа`}</p>
            }
            {state.status.isLoading &&
                <p className={`${styles.order_number} text text_type_main-large`}>{`Загрузка...`}</p>
            }
            { !(state.status.isLoading || state.status.isError) &&
                <p className={`${styles.order_number} text text_type_digits-large`}>{`${orderNumberStr}`}</p>
            }
            <span className={`text text_type_main-medium mb-15 ${styles.order_description}`}>идентификатор заказа</span>
            <div className={styles.image_container}>
                <img src={require("../../images/done.png")} alt={"Done"}/>
            </div>
            <span className={`${styles.ready_order} text text_type_main-default`}>Ваш заказ начали готовить</span>
            <span className={`${styles.wait_order} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</span>
        </>
    )
}
