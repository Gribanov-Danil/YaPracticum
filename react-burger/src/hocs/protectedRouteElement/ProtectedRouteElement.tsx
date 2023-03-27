import { Navigate } from 'react-router-dom';
import {FC, ReactElement, useEffect, useState} from 'react';
import {getAuthUser} from "../../utils/authUserResponse";
import {unwrapResult} from "@reduxjs/toolkit";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

interface IProtectedRouteElement {
    element: ReactElement
    onlyAuth?: boolean
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({element, onlyAuth = true}) => {
    const [isUserLoaded, setUserLoaded] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { user } = useAppSelector(state => state.userDataReducer)
    let dispatch = useAppDispatch()
    const init = async () => {
        let res = await dispatch(getAuthUser());
        if (res && res.success) {
            await unwrapResult(res)
                setIsSuccess(true)
        }
        setUserLoaded(true);
    };
    useEffect(() => {
        init()
    }, []);

    if (!isUserLoaded) {
        return null
    }

    if (!onlyAuth) {
        return user.email !== ''? <Navigate to={'/'} replace />:element
    }
    else {
        return isSuccess ? element : <Navigate to="/login"/>;
    }
}
