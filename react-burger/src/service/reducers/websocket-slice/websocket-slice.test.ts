import {
  initialState,
  websocketSlice,
  wsClose,
  wsError,
  wsMessage,
  wsSuccess,
} from "./websocket-slice"
import { testBun } from "../../../utils/constants/test-constants"

describe("websocketSlice", () => {
  it("should make wsConnected field true when connection is success", () => {
    const action = { type: wsSuccess.type }
    const store = websocketSlice.reducer(initialState, action)
    expect(store).toEqual({ ...initialState, wsConnected: true })
  })

  it("should make wsError field false when connection there is an error", () => {
    const action = { type: wsError.type }
    const store = websocketSlice.reducer({ ...initialState, wsConnected: true }, action)
    expect(store).toEqual({ ...initialState, error: true })
  })

  it("should close connection with arriving error status and reset state", () => {
    const withErrorAction = { type: wsClose.type, payload: false }
    const store = websocketSlice.reducer({ ...initialState, wsConnected: true }, withErrorAction)

    const withoutErrorAction = { type: wsClose.type, payload: true }
    const nextStore = websocketSlice.reducer(
      { ...initialState, wsConnected: true },
      withoutErrorAction,
    )

    expect(store).toEqual({ ...initialState, error: true })
    expect(nextStore).toEqual({ ...initialState })
  })

  it("should get messages from websocket and save them into orders", () => {
    const payload = {
      success: true,
      orders: [testBun],
      total: 1,
      totalToday: 1,
    }
    const action = {
      type: wsMessage.type,
      payload,
    }
    const store = websocketSlice.reducer(initialState, action)

    expect(store).toEqual({ ...initialState, orders: payload })
  })
})
