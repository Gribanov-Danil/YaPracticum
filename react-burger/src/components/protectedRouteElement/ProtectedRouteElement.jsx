import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getAuthUser} from "../../utils/authUserResponse";
import {useDispatch, useSelector} from "react-redux";
import {unwrapResult} from "@reduxjs/toolkit";

export const ProtectedRouteElement = ({element, onlyAuth = true}) => {
    const [isUserLoaded, setUserLoaded] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { user } = useSelector(state => state.userDataReducer)
    let dispatch = useDispatch()
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