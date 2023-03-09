import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getAuthUser} from "../../utils/authUserResponse";
import {useDispatch} from "react-redux";
import {getCookie} from "../../service/cookies/getCookie";

export const ProtectedRouteElement = ({element}) => {
    const [isUserLoaded, setUserLoaded] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    let dispatch = useDispatch()
    const init = async () => {
        await dispatch(getAuthUser());
        let token = getCookie('token')
        if (token) {
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