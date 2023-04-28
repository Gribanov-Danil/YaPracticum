import { combineReducers } from "redux"
import { ingredientsSlice } from "./reducers/ingredients-slice/ingredients-slice"
import { configureStore } from "@reduxjs/toolkit"
import { pickedIngredientSlice } from "./reducers/picked-ingredients-slice/picked-ingredients-slice"
import { orderDetailsSlice } from "./reducers/order-details-slice/order-details-slice"
import { userDataSlice } from "./reducers/user-data-slice/user-data-slice"
import {
  websocketSlice,
  wsClose,
  wsError,
  wsMessage,
  wsSuccess,
} from "./reducers/websocket-slice/websocket-slice"
import { wsDisconnect, wsSendMessage, wsStart } from "./actions/websocket-actions/websocket-actions"
import { websocketMiddleware } from "./middleware/websocket-middleware"

const ingredientsReducer = ingredientsSlice.reducer
const pickedIngredientsReducer = pickedIngredientSlice.reducer
const orderDetailsReducer = orderDetailsSlice.reducer
const userDataReducer = userDataSlice.reducer
const websocketReducer = websocketSlice.reducer

const rootReducer = combineReducers({
  ingredientsReducer,
  pickedIngredientsReducer,
  orderDetailsReducer,
  userDataReducer,
  websocketReducer,
})

const wsActions = {
  wsInit: wsStart,
  wsClose: wsDisconnect,
  wsSendMessage: wsSendMessage,
  onClose: wsClose,
  onMessage: wsMessage,
  onOpen: wsSuccess,
  onError: wsError,
}

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(websocketMiddleware(wsActions)),
  })
}

export type TRootState = ReturnType<typeof rootReducer>
export type TAppStore = ReturnType<typeof setupStore>
export type TAppDispatch = TAppStore["dispatch"]
