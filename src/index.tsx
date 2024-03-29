import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./components/app/app"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { setupStore } from "./service/store"
import { BrowserRouter } from "react-router-dom"

const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
reportWebVitals()
