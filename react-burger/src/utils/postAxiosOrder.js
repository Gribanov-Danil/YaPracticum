import {NormaNomorepartiesInstance, URL_ORDER} from "./constants/axiosInstance";

export const postAxiosOrder = async (ingredientsIdsList) => {
    const res = await NormaNomorepartiesInstance.post(URL_ORDER, { ingredients: ingredientsIdsList });
    if (res.status === 200) {
        const { name, order } = res.data;
        return { name, id: order.number };
    } else {
        return Promise.reject(`Ошибка ${res.status}`);
    }
};
