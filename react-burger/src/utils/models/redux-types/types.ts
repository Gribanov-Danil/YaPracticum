import {TIngredient} from "../ingredient-types/types";

export type TUser = {
    email: string
    name: string
}

export type TStatus = {
    isLoading: boolean
    isError: boolean
}

export type TUserResponse = {
    success: boolean
    user: TUser
}

export type TIngredientsResponse = {
    success: boolean
    data: TIngredient[]
}
