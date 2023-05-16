import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { IconicText } from "../../ui/iconic-text/iconic-text"
import styles from "./place-order.module.css"
import { Modal } from "../modal/modal"
import { FC, useCallback, useMemo, useState } from "react"
import { OrderDetails } from "../order-details/order-details"
import { deleteId } from "../../service/reducers/order-details-slice/order-details-slice"
import { postOrder } from "../../utils/REST/postOrder"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"

interface IPlaceOrder {
  onClick?: () => void
  buttonTitle?: string
  extraClass?: string
  isButtonDisabled?: boolean
}

/**
 * Панель с суммой заказа и кнопкой
 * @param buttonTitle текст кнопки (по умолчанию = "Оформить заказ")
 * @param extraClass дополнительные классы
 * @param onClick функция, вызываемая при клике на кнопку
 * @param isButtonDisabled доступность клика по кнопке
 * @constructor
 */
export const PlaceOrder: FC<IPlaceOrder> = ({
  buttonTitle = "Оформить заказ",
  extraClass,
  onClick,
  isButtonDisabled = false,
}) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const dispatch = useAppDispatch()
  const handleCloseModal = useCallback(() => {
    dispatch(deleteId())
    setModalVisible(false)
  }, [])

  const state = useAppSelector((state) => state.pickedIngredientsReducer)
  const pickedIngredient = state.pickedIngredient

  let pickedBun = state.pickedBun ? [state.pickedBun] : []
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
    dispatch(postOrder(ingredientsIdsList))
    if (user.email !== "") {
      setModalVisible(true)
    } else {
      navigate("/login", { replace: true })
    }
  }, [ingredientsIdsList, dispatch])

  return (
    <div className={`${styles.placeOrder} ${extraClass}`}>
      <IconicText
        text={orderAmount.toString().padStart(5, "\xa0")}
        textClass={"text_type_digits-medium"}
        iconLocation={"right"}
        gapInPx={8}
        icon={<CurrencyIcon type="primary" />}
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={onClick ? onClick : handleToggleModal}
        data-cy={"order-btn"}
        disabled={isButtonDisabled}
      >
        {buttonTitle}
      </Button>
      {isModalVisible && (
        <Modal onClick={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  )
}
