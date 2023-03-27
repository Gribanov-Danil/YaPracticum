import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IconifyText} from "../iconfyText/IconifyText";
import placeOrderStyles from "./placeOrder.module.css"
import {Modal} from "../modal/Modal";
import {useCallback, useMemo, useState} from "react";
import {OrderDetails} from "../orderDetails/OrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {orderDetailsSlice} from "../../service/reducers/orderDetailsSlice";
import {postAxiosOrder} from "../../utils/postAxiosOrder";
import {useNavigate} from "react-router-dom";
import {GetStateManager} from "../../utils/getStateManager";


export const PlaceOrder = () => {
    const [isModalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()
    const handleCloseModal = useCallback( () => {
        dispatch(deleteId())
        setModalVisible(false)
    }, [])

    const state = useSelector(GetStateManager.GetPickedIngredients())
    const {deleteId} = orderDetailsSlice.actions
    const pickedIngredient = state.pickedIngredient

    let pickedBun = Object.keys(state.pickedBun).length !== 0? [state.pickedBun]: []
    let orderItems = [...pickedBun, ...pickedBun]
    pickedIngredient.map((ingredientObj) => orderItems.push(ingredientObj.ingredient))
    let ingredients = orderItems
    const ingredientsIdsList = useMemo(() =>
        ingredients.map(ingredient => ingredient._id),
        [ingredients])
    let orderAmount = orderItems.reduce((amount, currentItem) => amount + currentItem.price, 0)
    orderAmount = orderAmount || 0

    const navigate = useNavigate()

    const { user } = useSelector(GetStateManager.GetUserData())
    const handleToggleModal = useCallback(async () => {
        // Todo: ts-ignore
        // @ts-ignore
        dispatch(postAxiosOrder(ingredientsIdsList))
        if (user.email !== '') {
            setModalVisible(true)
        }
        else {
            navigate('/login', { replace: true })
        }
    }, [ingredientsIdsList, dispatch])

    return (
        <div className={placeOrderStyles.placeOrder}>
            <IconifyText
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