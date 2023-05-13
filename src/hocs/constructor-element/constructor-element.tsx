import { FC } from "react"
import { getScreenType } from "../../utils/getScreenType"
import { ConstructorElementDesktop } from "../../ui/constructor-element/constructor-element-desktop"
import { ConstructorElementMobile } from "../../ui/constructor-element/constructor-element-mobile"

/**
 * Элемент конструктора заказов
 * @param text Название ингредиента
 * @param thumbnail Иконка ингредиента
 * @param price Цена ингредиента
 * @param type Тип элемента (указывается для булки)
 * @param isLocked Возможность удалить ингредиент из конструктора
 * @param extraClass Дополнительные классы
 * @param handleClose Функция, вызываемая при клики на иконку закрытия
 */
export const ConstructorElement: FC<{
  text: string
  thumbnail: string
  price: number
  type?: "top" | "bottom"
  isLocked?: boolean
  extraClass?: string
  handleClose?: () => void
}> = ({ type, text, thumbnail, price, isLocked, extraClass = "", handleClose }) => {
  return getScreenType() === "desktop" ? (
    <ConstructorElementDesktop
      text={text}
      thumbnail={thumbnail}
      price={price}
      type={type}
      handleClose={handleClose}
      isLocked={isLocked}
      extraClass={extraClass}
    />
  ) : (
    <ConstructorElementMobile
      text={text}
      thumbnail={thumbnail}
      price={price}
      handleClose={handleClose}
      extraClass={extraClass}
    />
  )
}
