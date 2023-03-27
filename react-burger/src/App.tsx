import './App.css';
import {ConstructorPage} from "./pages/constructorPage/ConstructorPage";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppHeader} from "./components/appHeader/AppHeader";
import {Location, Route, Routes, useLocation} from "react-router-dom";
import {SignInPage} from "./pages/sign-inPage/Sign-inPage";
import {RegistrationPage} from "./pages/registrationPage/RegistrationPage";
import {ForgotPasswordPage} from "./pages/forgotPasswordPage/ForgotPasswordPage";
import {ResetPasswordPage} from "./pages/resetPasswordPage/ResetPasswordPage";
import {ProfilePage} from "./pages/profilePage/ProfilePage";
import {ProtectedRouteElement} from "./hocs/protectedRouteElement/ProtectedRouteElement";
import {NotFound404} from "./pages/notFound404Page/NotFound404";
import {getAuthUser} from "./utils/authUserResponse";
import {unwrapResult} from "@reduxjs/toolkit";
import {ModalSwitch} from "./components/modalSwitch/ModalSwitch";
import {IngredientsDetails} from "./components/ingredientDetails/IngredientsDetails";
import {getIngredientsData} from "./utils/getIngredientsData";

function App() {
    const dispatch = useDispatch()
    useEffect( () => {
        // TODO разобраться ts-ignore
        // @ts-ignore
        dispatch(getIngredientsData())
    }, [])

    const init = async () => {
        // TODO разобраться ts-ignore
        // @ts-ignore
        let res = dispatch(getAuthUser());
        if (res && res.success) {
            // TODO разобраться ts-ignore
            // @ts-ignore
            await unwrapResult(res)
        }
    }
    useEffect(() => {
        init()
    }, [])

    const location = useLocation();
    let background: Location = location.state && location.state.background;

    return (
        <div className={"main_background"}>
            <AppHeader/>
            <Routes location={background || location}>
                <Route path={'/'} element={<ConstructorPage/>}/>
                <Route path={'/login'} element={<ProtectedRouteElement element={<SignInPage/>} onlyAuth={false}/>}/>
                <Route path={'/register'} element={<ProtectedRouteElement element={<RegistrationPage/>} onlyAuth={false} /> }/>
                <Route path={'/forgot-password'} element={<ProtectedRouteElement element={<ForgotPasswordPage/>} onlyAuth={false} /> }/>
                <Route path={'/reset-password'} element={<ProtectedRouteElement element={<ResetPasswordPage/>} onlyAuth={false} />}/>
                <Route path={'/profile/*'} element={<ProtectedRouteElement element={<ProfilePage />}/>}/>
                <Route path="*" element={<NotFound404 />} />
                <Route
                    path='/ingredients/:ingredientId'
                    element={<IngredientsDetails />}
                />
            </Routes>
            <ModalSwitch background={background} />
        </div>
    );
}

export default App;