import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IconfyText} from "../iconfyText/IconfyText";
import placeOrderStyles from "./placeOrder.module.css"
import {Modal} from "../modal/Modal";
import {useState} from "react";
import {OrderDetails} from "../orderDetails/OrderDetails";
import {useSelector} from "react-redux";
export const PlaceOrder = () => {
    const [isModalVisible, setModalVisible] = useState(false)
    const handleToggleModal = () => setModalVisible(!isModalVisible)
    const handleCloseModal = () => setModalVisible(false)
    const state = useSelector(state => state.pickedIngredientsReducer)
    const pickedIngredient = state.pickedIngredient
    let pickedBun = state.pickedBun
    pickedBun = Object.keys(pickedBun).length !== 0? [pickedBun]: []
    let orderAmount = [...pickedIngredient, ...pickedBun, ...pickedBun]
    orderAmount = orderAmount.reduce((amount, currentItem) => amount + currentItem.price, 0)
    orderAmount = orderAmount || 0
    return (
        <div className={placeOrderStyles.placeOrder}>
            <IconfyText
                text={orderAmount.toString()}
                textClass={"text_type_digits-medium"}
                iconLocation={"right"}
                gapInPx={8}
                icon={<CurrencyIcon type="primary" />}
            />
            <Button htmlType="button" type="primary" size="medium" onClick={handleToggleModal}>
                Оформить заказ
            </Button>
            <Modal active={isModalVisible} onClick={handleCloseModal}>
                <OrderDetails orderNumber={3456}/>
            </Modal>
        </div>
    )
}