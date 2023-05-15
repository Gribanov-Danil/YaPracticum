import styles from "./app.module.css"
import { ConstructorPage } from "../../pages/constructor-page/constructor-page"
import { useEffect } from "react"
import { AppHeader } from "../app-header/app-header"
import { Location, Route, Routes, useLocation } from "react-router-dom"
import { SignInPage } from "../../pages/sign-in-page/sign-in-page"
import { RegistrationPage } from "../../pages/registration-page/registration-page"
import { ForgotPasswordPage } from "../../pages/forgot-password-page/forgot-password-page"
import { ResetPasswordPage } from "../../pages/reset-password-page/reset-password-page"
import { ProfilePage } from "../../pages/profile-page/profile-page"
import { ProtectedRoute } from "../../hocs/protected-route-element/protected-route-element"
import { NotFound404 } from "../../pages/not-found-404-page/not-found-404-page"
import { getAuthUser } from "../../utils/REST/authUserResponse"
import { ModalSwitch } from "../modal-switch/modal-switch"
import { IngredientsDetails } from "../ingredient-details/ingredient-details"
import { getIngredientsData } from "../../utils/REST/getIngredientsData"
import { useAppDispatch } from "../../hooks/redux"
import { FeedPage } from "../../pages/feed-page/feed-page"
import { OrderInformation } from "../order-information/order-information"

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getIngredientsData())
  }, [])

  const init = async () => {
    await dispatch(getAuthUser({}))
  }
  useEffect(() => {
    init()
  }, [])

  const location = useLocation()
  let background: Location = location.state && location.state.background

  return (
    <div className={styles.main_background}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={"/"} element={<ConstructorPage />} />
        <Route
          path={"/login"}
          element={<ProtectedRoute element={<SignInPage />} onlyAuth={false} />}
        />
        <Route
          path={"/register"}
          element={<ProtectedRoute element={<RegistrationPage />} onlyAuth={false} />}
        />
        <Route
          path={"/forgot-password"}
          element={<ProtectedRoute element={<ForgotPasswordPage />} onlyAuth={false} />}
        />
        <Route path={"/feed"} element={<FeedPage />} />
        <Route
          path={"/reset-password"}
          element={<ProtectedRoute element={<ResetPasswordPage />} onlyAuth={false} />}
        />
        <Route path={"/profile/*"} element={<ProtectedRoute element={<ProfilePage />} />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/ingredients/:ingredientId" element={<IngredientsDetails />} />
        <Route path={"/feed/:id"} element={<OrderInformation />} />
        <Route
          path={"/profile/orders/:id"}
          element={<ProtectedRoute element={<OrderInformation />} />}
        />
      </Routes>
      <ModalSwitch background={background} />
    </div>
  )
}

export default App

// function App() {
//   const dispatch = useAppDispatch()
//   useEffect(() => {
//     dispatch(getIngredientsData())
//     dispatch(getAuthUser())
//   }, [])
//
//   const isLoading = useAppSelector((state) => state.userDataReducer).status.isLoading
//   const location = useLocation()
//   const background: Location = location.state && location.state.background
//
//   return (
//     <div className={styles.main_background}>
//       <AppHeader />
//       {!isLoading ? (
//         <>
//           <Routes location={background || location}>
//             <Route path={"/"} element={<ConstructorPage />} />
//             <Route
//               path={"/login"}
//               element={<ProtectedRoute element={<SignInPage />} onlyAuth={false} />}
//             />
//             <Route
//               path={"/register"}
//               element={<ProtectedRoute element={<RegistrationPage />} onlyAuth={false} />}
//             />
//             <Route
//               path={"/forgot-password"}
//               element={<ProtectedRoute element={<ForgotPasswordPage />} onlyAuth={false} />}
//             />
//             <Route path={"/feed"} element={<FeedPage />} />
//             <Route
//               path={"/reset-password"}
//               element={<ProtectedRoute element={<ResetPasswordPage />} onlyAuth={false} />}
//             />
//             <Route path={"/profile/*"} element={<ProtectedRoute element={<ProfilePage />} />} />
//             <Route path="*" element={<NotFound404 />} />
//             <Route path="/ingredients/:ingredientId" element={<IngredientsDetails />} />
//             <Route path={"/feed/:id"} element={<OrderInformation />} />
//             <Route
//               path={"/profile/orders/:id"}
//               element={<ProtectedRoute element={<OrderInformation />} />}
//             />
//           </Routes>
//           <ModalSwitch background={background} />
//         </>
//       ) : (
//         <h2>Загрузка</h2>
//       )}
//     </div>
//   )
// }
//
// export default App
