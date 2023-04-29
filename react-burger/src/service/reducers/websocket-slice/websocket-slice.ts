import { createSlice } from "@reduxjs/toolkit"
import { TOrders } from "../../../utils/models/websocket-types/types"

export type TWebsocketState = {
  wsConnected: boolean
  orders: TOrders | null
  error: boolean
}

export const initialState: TWebsocketState = {
  wsConnected: false,
  orders: null,
  error: false,
}

export const websocketSlice = createSlice({
  name: "websocketSlice",
  initialState,
  reducers: {
    wsSuccess(state) {
      state.wsConnected = true
      state.error = false
    },
    wsError(state) {
      state.wsConnected = false
      state.error = true
    },
    wsClose(state, action) {
      state.wsConnected = false
      state.error = !action.payload
      state.orders = null
    },
    wsMessage(state, action) {
      state.orders = action.payload
    },
  },
})

export const { wsSuccess, wsError, wsClose, wsMessage } = websocketSlice.actions
