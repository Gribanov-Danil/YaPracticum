import { Location, Route, Routes, useNavigate } from "react-router-dom"
import { Modal } from "../modal/modal"
import { IngredientsDetails } from "../ingredient-details/ingredient-details"
import { FC } from "react"
import { OrderInformation } from "../order-information/order-information"

interface IModalSwitch {
  background: Location
}

/**
 * Переключатель модального окна
 * Открывает модального окно при наличии background или отдельную страницу при его отсутствии
 * @param background бэкграунд локейшена пользователя
 */
export const ModalSwitch: FC<IModalSwitch> = ({ background }) => {
  const navigate = useNavigate()
  const handleCloseModal = () => navigate(-1)

  return (
    <>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal onClick={handleCloseModal}>
                <IngredientsDetails />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            element={
              <Modal onClick={handleCloseModal}>
                <OrderInformation />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <Modal onClick={handleCloseModal}>
                <OrderInformation />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  )
}
