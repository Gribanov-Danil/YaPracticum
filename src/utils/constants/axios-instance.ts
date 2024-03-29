import axios from "axios"

/**
 * Дефолтный инстанс запроса по роуту https://norma.nomoreparties.space/api/
 */
export const AxiosRequestInstance = axios.create({
  baseURL: "https://norma.nomoreparties.space/api/",
  timeout: 5000,
  headers: { Accept: "application/json" },
})

export const URL_ORDER = "/orders"
export const URL_FORGOT_PASSWORD = "/password-reset"
export const URL_PASSWORD_RESET = "/password-reset/reset"
export const URL_REGISTRATION = "/auth/register"
export const URL_LOGIN = "/auth/login"
export const URL_LOGOUT = "/auth/logout"
export const URL_UPDATE_TOKEN = "/auth/token"
export const URL_AUTH_USER = "/auth/user"
export const URL_INGREDIENTS = "/ingredients"
