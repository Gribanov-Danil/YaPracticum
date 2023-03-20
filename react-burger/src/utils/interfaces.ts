
export interface IIngredient {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
}

export interface IIngredientObj {
    id: string
    ingredient: IIngredient
}

export interface IUser {
    email: string
    name: string
}

export interface IStatus {
    isLoading: boolean
    isError: boolean
}