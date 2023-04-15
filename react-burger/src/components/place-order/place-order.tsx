import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { IconicText } from "../../ui/iconic-text/iconic-text"
import placeOrderStyles from "./place-order.module.css"
import { Modal } from "../modal/modal"
import { useCallback, useMemo, useState } from "react"
import { OrderDetails } from "../order-details/order-details"
import { deleteId } from "../../service/reducers/orderDetailsSlice"
import { postAxiosOrder } from "../../utils/postAxiosOrder"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"

export const PlaceOrder = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const dispatch = useAppDispatch()
  const handleCloseModal = useCallback(() => {
    dispatch(deleteId())
    setModalVisible(false)
  }, [])

  const state = useAppSelector((state) => state.pickedIngredientsReducer)
  const pickedIngredient = state.pickedIngredient

  let pickedBun = Object.keys(state.pickedBun).length !== 0 ? [state.pickedBun] : []
  let orderItems = [...pickedBun, ...pickedBun]
  pickedIngredient.map((ingredientObj) => orderItems.push(ingredientObj.ingredient))
  let ingredients = orderItems
  const ingredientsIdsList = useMemo(
    () => ingredients.map((ingredient) => ingredient._id),
    [ingredients],
  )
  let orderAmount = orderItems.reduce((amount, currentItem) => amount + currentItem.price, 0)
  orderAmount = orderAmount || 0

  const navigate = useNavigate()

  const { user } = useAppSelector((state) => state.userDataReducer)
  const handleToggleModal = useCallback(async () => {
    dispatch(postAxiosOrder(ingredientsIdsList))
    if (user.email !== "") {
      setModalVisible(true)
    } else {
      navigate("/login", { replace: true })
    }
  }, [ingredientsIdsList, dispatch])

  return (
    <div className={placeOrderStyles.placeOrder}>
      <IconicText
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
        <OrderDetails />
      </Modal>
    </div>
  )
}
