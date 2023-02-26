import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IconfyText} from "../iconfyText/IconfyText";
import placeOrderStyles from "./placeOrder.module.css"
import {Modal} from "../modal/Modal";
import {useCallback, useMemo, useState} from "react";
import {OrderDetails} from "../orderDetails/OrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {orderDetailsSlice} from "../../service/reducers/orderDetailsSlice";
import {postAxiosOrder} from "../../utils/postAxiosOrder";


export const PlaceOrder = () => {
    const [isModalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()
    const handleCloseModal = useCallback( () => {
        dispatch(deleteId())
        setModalVisible(false)
    }, [])

    const state = useSelector(state => state.pickedIngredientsReducer)
    const {deleteId} = orderDetailsSlice.actions
    const pickedIngredient = state.pickedIngredient
    let pickedBun = state.pickedBun

    pickedBun = Object.keys(pickedBun).length !== 0? [pickedBun]: []
    let orderAmount = [...pickedBun, ...pickedBun]
    pickedIngredient.map((ingredientObj) => orderAmount.push(ingredientObj.ingredient))
    let ingredients = orderAmount
    const ingredientsIdsList = useMemo(() =>
        ingredients.map(ingredient => ingredient._id),
        [ingredients])
    orderAmount = orderAmount.reduce((amount, currentItem) => amount + currentItem.price, 0)
    orderAmount = orderAmount || 0


    //TODO сделать оповещение о ошибке при заказе в попапчик
    const handleToggleModal = useCallback(() => {
        setModalVisible(true)
        dispatch(postAxiosOrder(ingredientsIdsList))
    }, [ingredientsIdsList, dispatch])

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
                <OrderDetails/>
            </Modal>
        </div>
    )
}