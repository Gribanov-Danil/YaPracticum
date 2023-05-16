import { AxiosRequestInstance, URL_ORDER } from "../constants/axios-instance"
import {
  fetchDataError,
  fetchDataProcessing,
  updateId,
} from "../../service/reducers/order-details-slice/order-details-slice"
import { getCookie } from "../../service/cookies/getCookie"
import { TAppDispatch } from "../../service/store"
import { TOrderItem } from "../models/websocket-types/types"
import { cleanConstructor } from "../../service/reducers/picked-ingredients-slice/picked-ingredients-slice"

type TPostOrderResponse = {
  name: string
  order: {
    createdAt: string
    ingredients: TOrderItem[]
    name: string
    number: number
    owner: {
      createdAt: string
      email: string
      name: string
      updatedAt: string
    }
    price: number
    status: string
    updatedAt: string
    _id: string
  }
  success: boolean
}

/**
 * POST запрос, возвращающий TPostOrderResponse в случае успеха
 * @param ingredientsIdsList список ингредиентов в заказе
 */
export const postOrder = (ingredientsIdsList: string[]) => async (dispatch: TAppDispatch) => {
  dispatch(fetchDataProcessing())
  try {
    const response = await AxiosRequestInstance.post<TPostOrderResponse>(
      URL_ORDER,
      { ingredients: ingredientsIdsList },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        timeout: 1000 * 30,
      },
    )
    const { order, success } = response.data
    if (success) {
      dispatch(cleanConstructor())
    }
    dispatch(updateId(order.number))
  } catch (e) {
    dispatch(fetchDataError())
  }
}
