import { Navigate, useLocation } from "react-router-dom"
import { FC, ReactElement, useEffect, useState } from "react"
import { getAuthUser } from "../../utils/REST/authUserResponse"
import { unwrapResult } from "@reduxjs/toolkit"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"

interface IProtectedRouteElement {
  element: ReactElement
  onlyAuth?: boolean
}

export const ProtectedRoute: FC<IProtectedRouteElement> = ({ element, onlyAuth = true }) => {
  const [isUserLoaded, setUserLoaded] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { user } = useAppSelector((state) => state.userDataReducer)
  let dispatch = useAppDispatch()
  const location = useLocation()
  const from = location.state?.from || "/"
  const init = async () => {
    let payload = await dispatch(getAuthUser())
    let res = unwrapResult(payload)
    if (res && res.success) {
      setIsSuccess(true)
    }
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
