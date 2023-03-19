import {combineReducers} from "redux";
import ingredientsReducer from "./reducers/ingredientsSlice";
import {configureStore} from "@reduxjs/toolkit";
import pickedIngredientsReducer from "./reducers/pickedIngredientsSlice.ts"
import orderDetailsReducer from "./reducers/orderDetailsSlice"
import userDataReducer from "./reducers/userDataSlice";


const rootReducer = combineReducers({
    ingredientsReducer,
    pickedIngredientsReducer,
    orderDetailsReducer,
    userDataReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}