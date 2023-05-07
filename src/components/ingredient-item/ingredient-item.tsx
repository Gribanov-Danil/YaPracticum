import { Button, Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./ingredient-item.module.css"
import { memo, SyntheticEvent, useEffect, useState } from "react"
import { useDrag } from "react-dnd"
import { Link, useLocation } from "react-router-dom"
import { useAppSelector } from "../../hooks/redux"
import { TIngredient, TIngredientObj } from "../../utils/models/ingredient-types/types"
import { getScreenType } from "../../utils/getScreenType"

interface IIngredientItem {
  ingredient: TIngredient
}

type TPickedIngredientState = {
  pickedIngredient: TIngredientObj[]
  pickedBun: TIngredient
}

export const IngredientItem = memo<IIngredientItem>(function IngredientItem({ ingredient }) {
  const [ingredientCount, setIngredientCount] = useState<number>(0)
  const state: TPickedIngredientState = useAppSelector((state) => state.pickedIngredientsReducer)

  const pickedIngredient = state.pickedIngredient
  let pickedBun = state.pickedBun
  let data: TIngredient[] = []
  if (Object.keys(pickedBun).length !== 0) {
    data = [pickedBun, pickedBun]
  }
  pickedIngredient.map((ingredientObj: TIngredientObj) => data.push(ingredientObj.ingredient))
  useEffect(() => {
    setIngredientCount(data.filter((item) => item._id === ingredient._id).length)
  })

  const [, dragRef] = useDrag({
    type: "ingredientItem",
    item: ingredient,
  })

  const location = useLocation()
  const screenType = getScreenType()
  const handleAddIngredient = (e: SyntheticEvent) => {
    console.log(e)
    e.stopPropagation()
  }

  return (
    <Link
      key={ingredient._id}
      to={`/ingredients/${ingredient._id}`}
      state={{ background: location }}
      data-cy={"ingredient"}
    >
      <div ref={dragRef} className={styles.item_card}>
        {ingredientCount !== 0 && (
          <Counter count={ingredientCount} size="default" extraClass="m-1" />
        )}
        <div className="ml-4 mb-1 mr-4">
          <img src={screenType === "desktop" ? ingredient.image : ingredient.image_mobile} alt="" />
        </div>
        <div className={`${styles.price_block} mb-1`}>
          <p className={`text text_type_digits-default ${styles.price} mr-2`}>{ingredient.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <div className={styles.ingredient_name}>
          <p
            className={`text ${
              screenType === "desktop" ? "text_type_main-default" : "text_type_main-small"
            } ${styles.name}`}
          >
            {ingredient.name}
          </p>
        </div>
        <Button
          onClick={(e) => handleAddIngredient(e)}
          htmlType="button"
          type="secondary"
          size="small"
          extraClass={styles.btn_small}
        >
          Добавить
        </Button>
      </div>
    </Link>
  )
})
