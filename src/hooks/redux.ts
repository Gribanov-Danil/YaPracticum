import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { TAppDispatch, TRootState } from "../service/store"

// useDispatch с типизацией
export const useAppDispatch = () => useDispatch<TAppDispatch>()
// useSelector с типизацией
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
