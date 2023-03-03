import {AxiosRequestInstance, URL_ORDER} from "./constants/axiosInstance";
import {orderDetailsSlice} from "../service/reducers/orderDetailsSlice";

const {fetchDataProcessing, updateId, fetchDataError} = orderDetailsSlice.actions

export const postAxiosOrder = (ingredientsIdsList) => async (dispatch) => {
    dispatch(fetchDataProcessing())
    try {
        const response = await AxiosRequestInstance.post(URL_ORDER, {ingredients: ingredientsIdsList});
        const {order} = response.data;
        dispatch(updateId({id: order.number}))
    } catch (e) {
        dispatch(fetchDataError())
    }
}