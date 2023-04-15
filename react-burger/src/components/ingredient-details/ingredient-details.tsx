import styles from "./ingredient-details.module.css"
import { IngredientCharacteristic } from "../ingredient-characteristic/ingredient-characteristic"
import { useLocation, useParams } from "react-router-dom"
import { FC } from "react"
import { useAppSelector } from "../../hooks/redux"

export const IngredientsDetails: FC = () => {
  const location = useLocation()
  const { ingredientId } = useParams()
  const { dataArray, status } = useAppSelector((state) => state.ingredientsReducer)
  const data = dataArray.filter((el) => el._id === ingredientId)[0]
  return (
    <>
      {!status.isLoading && !status.isError && (
        <>
          <h2 className={`mt-10 ml-10 mr-10 text text_type_main-large ${styles.header}`}>
            Детали ингредиента
          </h2>
          <div
            className={`${styles.ingredient_image} ${!location.state ? styles.new_page_modal : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={data?.image_large} alt="" />
          </div>
          <div className={styles.text_block}>
            <p className="text text_type_main-medium mb-8">{data?.name}</p>
            <div className={`mb-15 mr-25 ml-25 ${styles.characteristic_block}`}>
              <IngredientCharacteristic title={"Калории,ккал"} characteristic={data?.calories} />
              <IngredientCharacteristic title={"Белки, г"} characteristic={data?.proteins} />
              <IngredientCharacteristic title={"Жиры, г"} characteristic={data?.fat} />
              <IngredientCharacteristic
                title={"Углеводы, г"}
                characteristic={data?.carbohydrates}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
