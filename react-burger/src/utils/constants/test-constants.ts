import { TIngredient } from "../models/ingredient-types/types"

export const STORE_ADDRESS = "http://localhost:3000"

export const testBun: TIngredient = {
  _id: "643d69a5c3f7b9001cfa093c",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
}

export const testIngredient: TIngredient = {
  _id: "643d69a5c3f7b9001cfa0947",
  name: "Плоды Фалленианского дерева",
  type: "main",
  proteins: 20,
  fat: 5,
  carbohydrates: 55,
  calories: 77,
  price: 874,
  image: "https://code.s3.yandex.net/react/code/sp_1.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
  __v: 0,
}
