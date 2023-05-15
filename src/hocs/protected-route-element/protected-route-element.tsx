import { Navigate, useLocation } from "react-router-dom"
import { FC, ReactElement, useEffect, useState } from "react"
import { getAuthUser } from "../../utils/REST/authUserResponse"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"

interface IProtectedRouteElement {
  element: ReactElement
  onlyAuth?: boolean
}

/**
 * Компонент высшего порядка, проверяющий доступ пользователя к различным роутам
 * @param element ReactElement
 * @param onlyAuth доступность элемента только авторизированным пользователям;
 * при значении false - доступ предоставляется только неавторизованным пользователям
 */
export const ProtectedRoute: FC<IProtectedRouteElement> = ({ element, onlyAuth = true }) => {
  const [isUserLoaded, setUserLoaded] = useState(false)
  const { user } = useAppSelector((state) => state.userDataReducer)
  let dispatch = useAppDispatch()
  const location = useLocation()
  const from = location.state?.from || "/"
  const init = async () => {
    await dispatch(getAuthUser({}))
    setUserLoaded(true)
  }
  useEffect(() => {
    init()
  }, [])
  if (!isUserLoaded) {
    return null
  }
  if (!onlyAuth && user.email !== "") {
    return <Navigate to={from} />
  }
  if (onlyAuth && user.email === "") {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return element
}
