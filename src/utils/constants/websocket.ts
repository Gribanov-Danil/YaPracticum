import { getCookie } from "../../service/cookies/getCookie"

export const WS_BASE_URL = "wss://norma.nomoreparties.space/orders"
export const WS_ALL = `${WS_BASE_URL}/all`
export const WS_USER = `${WS_BASE_URL}?token=${getCookie("token")}`
