import { Middleware } from "redux"
import { TwsActionsTypes } from "../../utils/models/websocket-types/types"
import { TRootState } from "../store"

export const websocketMiddleware =
  (wsActions: TwsActionsTypes): Middleware<{}, TRootState> =>
  (store) => {
    let socket: WebSocket | null = null
    return (next) => (action) => {
      const { dispatch } = store
      const { wsInit, wsClose, wsSendMessage, onClose, onMessage, onOpen, onError } = wsActions
      if (wsInit.match(action)) {
        socket = new WebSocket(action.payload)
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch(onOpen())
        }
        socket.onclose = (event) => {
          dispatch(onClose(event.wasClean))
          socket = null
        }
        socket.onerror = (event) => {
          dispatch(onError())
        }
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data)
          if (data.success) dispatch(onMessage(data))
          else dispatch(onError())
        }
        if (wsSendMessage?.match(action)) {
          socket.send(JSON.stringify(action.payload))
        }
        if (wsClose.match(action)) {
          socket.close()
        }
      }
      next(action)
    }
  }
