import { Navigate, useLocation } from "react-router-dom"
import { FC, ReactElement } from "react"
import { useAppSelector } from "../../hooks/redux"

interface IProtectedRouteElement {
  children: ReactElement
  anonymous?: boolean
}

export const ProtectedRoute: FC<IProtectedRouteElement> = ({ children, anonymous = false }) => {
  const isLoggedIn = !!useAppSelector((store) => store.userDataReducer.user.email)

  const location = useLocation()
  const from = location.state?.from || "/"
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
