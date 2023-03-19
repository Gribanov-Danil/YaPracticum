import styles from "./ingredientsDetails.module.css"
import {IngredientCharacteristic} from "../ingredientCharacteristic/IngredientCharacteristic";
import {useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {FC} from "react";

export const IngredientsDetails: FC = () => {
    const location = useLocation()
    const { ingredientId } = useParams()

    // TODO разобрать state: any
    const getIngredient = (state: any) => state.ingredientsReducer
    const { dataArray, status } = useSelector(getIngredient)
    console.log(dataArray)
    // TODO разобрать el: any
    const data = dataArray.filter((el: any) => el._id === ingredientId)[0]
    return (
        <>
            {!status.isLoading && !status.isError &&
                (
                    <>
                        <div className={`${styles.ingredient_image} ${!location.state? styles.new_page_modal : ''}`} onClick={(e => e.stopPropagation())}>
                            <img src={data?.image_large} alt=""/>
                        </div>
                        <div className={styles.text_block}>
                            <p className="text text_type_main-medium mb-8">{data?.name}</p>
                            <div className={`mb-15 mr-25 ml-25 ${styles.characteristic_block}`}>
                                <IngredientCharacteristic title={"Калории,ккал"} characteristic={data?.calories}/>
                                <IngredientCharacteristic title={"Белки, г"} characteristic={data?.proteins}/>
                                <IngredientCharacteristic title={"Жиры, г"} characteristic={data?.fat}/>
                                <IngredientCharacteristic title={"Углеводы, г"} characteristic={data?.carbohydrates}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}