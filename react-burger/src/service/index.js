import {combineReducers} from "redux";
import ingredientsReducer from "./reducers/ingredientsSlice";
import {configureStore} from "@reduxjs/toolkit";
import pickedIngredientsReducer from "./reducers/pickedIngredientsSlice.js"
import orderDetailsReducer from "./reducers/orderDetailsSlice"
import ingredientDetailsReducer from "./reducers/ingredientDetailsSlice";
import userDataReducer from "./reducers/userDataSlice";


const rootReducer = combineReducers({
    ingredientsReducer,
    pickedIngredientsReducer,
    orderDetailsReducer,
    ingredientDetailsReducer,
    userDataReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}