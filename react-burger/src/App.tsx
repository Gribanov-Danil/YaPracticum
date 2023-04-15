import "./App.css"
import { ConstructorPage } from "./pages/constructor-page/constructor-page"
import { useEffect } from "react"
import { AppHeader } from "./components/app-header/app-header"
import { Location, Route, Routes, useLocation } from "react-router-dom"
import { SignInPage } from "./pages/sign-in-page/sign-in-page"
import { RegistrationPage } from "./pages/registration-page/registration-page"
import { ForgotPasswordPage } from "./pages/forgot-password-page/forgot-password-page"
import { ResetPasswordPage } from "./pages/reset-password-page/reset-password-page"
import { ProfilePage } from "./pages/profile-page/profile-page"
import { ProtectedRouteElement } from "./hocs/protected-route-element/protected-route-element"
import { NotFound404 } from "./pages/not-found-404-page/not-found-404-page"
import { getAuthUser } from "./utils/authUserResponse"
import { ModalSwitch } from "./components/modal-switch/modal-switch"
import { IngredientsDetails } from "./components/ingredient-details/ingredient-details"
import { getIngredientsData } from "./utils/getIngredientsData"
import { useAppDispatch } from "./hooks/redux"
import { FeedPage } from "./pages/feed-page/feed-page"
import { OrderInformation } from "./components/order-information/order-information"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getIngredientsData())
  }, [])

  const init = async () => {
    await dispatch(getAuthUser())
  }
  useEffect(() => {
    init()
  }, [])

  const location = useLocation()
  let background: Location = location.state && location.state.background

  return (
    <div className={"main_background"}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={"/"} element={<ConstructorPage />} />
        <Route
          path={"/login"}
          element={<ProtectedRouteElement element={<SignInPage />} onlyAuth={false} />}
        />
        <Route
          path={"/register"}
          element={<ProtectedRouteElement element={<RegistrationPage />} onlyAuth={false} />}
        />
        <Route
          path={"/forgot-password"}
          element={<ProtectedRouteElement element={<ForgotPasswordPage />} onlyAuth={false} />}
        />
        <Route path={"/feed"} element={<FeedPage />} />
        <Route
          path={"/reset-password"}
          element={<ProtectedRouteElement element={<ResetPasswordPage />} onlyAuth={false} />}
        />
        <Route path={"/profile/*"} element={<ProtectedRouteElement element={<ProfilePage />} />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/ingredients/:ingredientId" element={<IngredientsDetails />} />
        <Route path={"/feed/:id"} element={<OrderInformation />} />
        <Route
          path={"/profile/orders/:id"}
          element={<ProtectedRouteElement element={<OrderInformation />} />}
        />
      </Routes>
      <ModalSwitch background={background} />
    </div>
  )
}

export default App
