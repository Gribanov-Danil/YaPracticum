import { Navigate } from 'react-router-dom';
import {FC, ReactElement, useEffect, useState} from 'react';
import {getAuthUser} from "../../utils/authUserResponse";
import {useDispatch, useSelector} from "react-redux";
import {unwrapResult} from "@reduxjs/toolkit";
import {GetStateManager} from "../../utils/getStateManager";

interface IProtectedRouteElement {
    element: ReactElement
    onlyAuth?: boolean
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({element, onlyAuth = true}) => {
    const [isUserLoaded, setUserLoaded] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { user } = useSelector(GetStateManager.GetUserData())
    let dispatch = useDispatch()
    const init = async () => {
        // TODO ts-ignore
        // @ts-ignore
        let res = await dispatch(getAuthUser());
        if (res && res.success) {
            // TODO ts-ignore
                // @ts-ignore
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
