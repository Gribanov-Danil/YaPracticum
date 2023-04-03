import { Location, Route, Routes, useNavigate } from "react-router-dom"
import { Modal } from "../modal/Modal"
import { IngredientsDetails } from "../ingredientDetails/IngredientsDetails"
import { FC } from "react"

interface IModalSwitch {
  background: Location
}

export const ModalSwitch: FC<IModalSwitch> = ({ background }) => {
  const navigate = useNavigate()
  const handleCloseModal = () => {
    navigate(-1)
  }
  return (
    <>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal title={"Детали ингредиента"} onClick={handleCloseModal}>
                <IngredientsDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  )
}
