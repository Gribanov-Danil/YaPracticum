import './App.css';
import styles from "./App.css"
import {ConstructorPage} from "./pages/constructorPage/ConstructorPage";
import {useEffect, useState} from "react";
import {checkResponse} from "./utils/checkReponse";
import {ingredientsSlice} from "./service/reducers/ingredientsSlice";
import {useDispatch} from "react-redux";
import {AppHeader} from "./components/appHeader/AppHeader";
import {Route, Routes} from "react-router-dom";
import {SignInPage} from "./pages/sign-inPage/Sign-inPage";
import {RegistrationPage} from "./pages/registrationPage/RegistrationPage";
import {ForgotPasswordPage} from "./pages/forgotPasswordPage/ForgotPasswordPage";
import {ResetPasswordPage} from "./pages/resetPasswordPage/ResetPasswordPage";
import {ProfilePage} from "./pages/profilePage/ProfilePage";
import {ProtectedRouteElement} from "./components/protectedRouteElement/ProtectedRouteElement";


//TODO сделать layout для ошибки getData().catch

//TODO 7 пункт
//TODO Проверить все диспатчи и применить анврап по необходимости
//TODO Сделать защищенные роуты для залогиненного пользователя
//TODO Сделать страницу 404


function App() {
    const {setFetchDataSuccess} = ingredientsSlice.actions
    const dispatch = useDispatch()
    const URL = 'https://norma.nomoreparties.space/api/ingredients';
    const [data, setData] = useState({
        dataArray: [],
        isLoading: false
    })
    useEffect( () => {
        const getData = async () => {
            setData({...data, isLoading: true})
            let response = await fetch(URL)
            let result = await checkResponse(response)
            dispatch(setFetchDataSuccess({ dataArray: result.data }))
            setData({...data, dataArray: result.data, isLoading: false})

    }
    getData().catch(() => console.log("Ошибка загрузки данных"))
    }, [URL])

    return (
        <div className={styles.main_background}>
            <AppHeader/>
            <Routes>
                <Route path={'/'} element={<ConstructorPage/>}/>
                <Route path={'/login'} element={<SignInPage/>}/>
                <Route path={'/register'} element={<RegistrationPage/>}/>
                <Route path={'/forgot-password'} element={<ForgotPasswordPage/>}/>
                <Route path={'/reset-password'} element={<ResetPasswordPage/>}/>
                <Route path={'/profile/*'} element={<ProtectedRouteElement element={<ProfilePage />}/>}/>
            </Routes>
        </div>
    );
}

export default App;
