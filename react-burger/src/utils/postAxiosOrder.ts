import {AxiosRequestInstance, URL_ORDER} from "./constants/axiosInstance";
import {orderDetailsSlice} from "../service/reducers/orderDetailsSlice";
import {getCookie} from "../service/cookies/getCookie";
import {AnyAction, Dispatch} from "redux";

const {fetchDataProcessing, updateId, fetchDataError} = orderDetailsSlice.actions

export const postAxiosOrder = (ingredientsIdsList: string[]) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchDataProcessing())
    try {
        const response = await AxiosRequestInstance.post(URL_ORDER, {ingredients: ingredientsIdsList},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getCookie('token')}`
                },
                timeout: 1000 * 30,
            });
        const {order} = response.data;
        dispatch(updateId({id: order.number}))
        return order
    } catch (e) {
        dispatch(fetchDataError())
    }
}