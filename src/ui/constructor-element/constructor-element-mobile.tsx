import { FC } from "react"
import clsx from "clsx"
import "./constructor-element.css"
import { CurrencyIcon, DeleteIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list"

/**
 * Мобильная версия элемента конструктора заказов
 * @param text Название ингредиента
 * @param thumbnail Иконка ингредиента
 * @param price Цена ингредиента
 * @param extraClass Дополнительные классы
 * @param handleClose Функция, вызываемая при клики на иконку закрытия
 */
export const ConstructorElementMobile: FC<{
  text: string
  thumbnail: string
  price: number
  extraClass?: string
  handleClose?: () => void
}> = ({ text, thumbnail, price, extraClass = "", handleClose }) => {
  const className = clsx("constructor-element", extraClass)

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={handleClose ? handleClose : () => {}}>
        <div className="delete_block">
          <DeleteIcon type={"primary"} />
        </div>
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList type={Type.IOS} threshold={0.225} fullSwipe={true}>
      <SwipeableListItem trailingActions={trailingActions()}>
        <div className={className}>
          <span className="centered_element constructor-element__row">
            <div className="centered_element">
              <img className="constructor-element__image" src={thumbnail} alt={text} />
              <span className="constructor-element__text">{text}</span>
            </div>
            <div>
              <span className="constructor-element__price">
                {price}
                <CurrencyIcon type="primary" />
              </span>
            </div>
          </span>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
