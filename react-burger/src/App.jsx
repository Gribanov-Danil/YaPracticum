import './App.css';
import {AppHeader} from "./components/appHeader/AppHeader";
import {Page} from "./components/page/Page";
import {BurgerIngredients} from "./components/burgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "./components/burgerConstructor/burgerConstructor";
import {useEffect, useState} from "react";
import {checkResponse} from "./utils/checkReponse";
import {ingredientsSlice} from "./service/reducers/ingredientsSlice";
import {useDispatch, useSelector} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

//TODO сделать layout для ошибки getData().catch


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

    const getState = (state) => state.ingredientsReducer
    const state = useSelector(getState)

    return (
        <div className="App">
            <AppHeader/>
            <main>
                <Page>
                    {state.status.isError &&  <h1 className={"text text_type_main-large"}>Произошла ошибка при загрузке данных</h1>}
                    {state.status.isLoading && <h1 className={"text text_type_main-large"}>Загрузка...</h1> }
                    {!state.status.isLoading && Object.keys(state.dataArray).length && (
                        <DndProvider backend={HTML5Backend}>
                            <BurgerIngredients/>
                            <BurgerConstructor/>
                        </DndProvider>
                    )}
                </Page>
            </main>
        </div>
    );
}

export default App;
