import axios from "axios";

export const NormaNomorepartiesInstance = axios.create({
    baseURL: 'https://norma.nomoreparties.space/api/',
    timeout: 1000,
    headers: { Accept: 'application/json' }
})

export const URL_ORDER = "/orders"
export const URL_PASSWORD_RESET = "/password-reset"

export const ForgotPasswordInstance = axios.create({
    baseURL: 'https://norma.nomoreparties.space/api',
    timeout: 1000,
    headers: { Accept: 'application/json' }
})
