import { AxiosRequestInstance, URL_ORDER } from "./constants/axiosInstance"
import {
  fetchDataError,
  fetchDataProcessing,
  updateId,
} from "../service/reducers/orderDetailsSlice"
import { getCookie } from "../service/cookies/getCookie"
import { AppDispatch } from "../service/store"

export const postAxiosOrder = (ingredientsIdsList: string[]) => async (dispatch: AppDispatch) => {
  dispatch(fetchDataProcessing())
  try {
    const response = await AxiosRequestInstance.post(
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
    const { order } = response.data
    dispatch(updateId(order.number))
    return order
  } catch (e) {
    dispatch(fetchDataError())
  }
}
