import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getAuthUser} from "../../utils/authUserResponse";
import {useDispatch} from "react-redux";
import {unwrapResult} from "@reduxjs/toolkit";

export const ProtectedRouteElement = ({element}) => {
    const [isUserLoaded, setUserLoaded] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
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

    return isSuccess ? element : <Navigate to="/login"/>;
}