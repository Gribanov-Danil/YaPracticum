import './App.css';
import styles from "./App.css"
import {ConstructorPage} from "./pages/constructorPage/ConstructorPage";
import {useEffect} from "react";
import {checkResponse} from "./utils/checkReponse";
import {ingredientsSlice} from "./service/reducers/ingredientsSlice";
import {useDispatch} from "react-redux";
import {AppHeader} from "./components/appHeader/AppHeader";
import {Route, Routes, useLocation} from "react-router-dom";
import {SignInPage} from "./pages/sign-inPage/Sign-inPage";
import {RegistrationPage} from "./pages/registrationPage/RegistrationPage";
import {ForgotPasswordPage} from "./pages/forgotPasswordPage/ForgotPasswordPage";
import {ResetPasswordPage} from "./pages/resetPasswordPage/ResetPasswordPage";
import {ProfilePage} from "./pages/profilePage/ProfilePage";
import {ProtectedRouteElement} from "./components/protectedRouteElement/ProtectedRouteElement";
import {NotFound404} from "./pages/notFound404Page/NotFound404";
import {getAuthUser} from "./utils/authUserResponse";
import {unwrapResult} from "@reduxjs/toolkit";
import {ModalSwitch} from "./components/modalSwitch/ModalSwitch";
import {IngredientsDetails} from "./components/ingredientDetails/IngredientsDetails";

function App() {
    const {setFetchDataSuccess} = ingredientsSlice.actions
    const dispatch = useDispatch()
    const URL = 'https://norma.nomoreparties.space/api/ingredients';

    const getData = async () => {
        let response = await fetch(URL)
        let result = await checkResponse(response)
        dispatch(setFetchDataSuccess({ dataArray: result.data }))
    }
    useEffect( () => {
        getData().catch(() => console.log("Ошибка загрузки данных"))
    }, [])

    const init = async () => {
        let res = dispatch(getAuthUser());
        if (res && res.success) {
            await unwrapResult(res)
        }
    }
    useEffect(() => {
        init()
    }, [])

    const location = useLocation();
    let background = location.state && location.state.background;

    return (
        <div className={styles.main_background}>
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
