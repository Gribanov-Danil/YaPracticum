import {combineReducers} from "redux";
import {ingredientsSlice} from "./reducers/ingredientsSlice";
import {configureStore} from "@reduxjs/toolkit";
import {pickedIngredientSlice} from "./reducers/pickedIngredientsSlice"
import {orderDetailsSlice} from "./reducers/orderDetailsSlice"
import {userDataSlice} from "./reducers/userDataSlice";

const ingredientsReducer = ingredientsSlice.reducer
const pickedIngredientsReducer = pickedIngredientSlice.reducer
const orderDetailsReducer = orderDetailsSlice.reducer
const userDataReducer = userDataSlice.reducer

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

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']