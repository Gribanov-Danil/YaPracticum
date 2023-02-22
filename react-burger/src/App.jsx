import './App.css';
import {AppHeader} from "./components/appHeader/AppHeader";
import {Page} from "./components/page/Page";
import {BurgerIngredients} from "./components/burgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "./components/burgerConstructor/burgerConstructor";
import {useEffect, useState} from "react";
import {checkResponse} from "./utils/checkReponse";
import {ingredientDetailsSlice} from "./service/reducers/ingredientDetailsSlice";
import {useDispatch} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

//TODO сделать layout для ошибки getData().catch


function App() {
    const {setFetchData} = ingredientDetailsSlice.actions
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
            dispatch(setFetchData({ dataArray: result.data, isLoading: false}))
            setData({...data, dataArray: result.data, isLoading: false})

    }
    getData().catch(() => console.log("Ошибка загрузки данных"))
    }, [URL])
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <Page>
                    {!data.isLoading && Object.keys(data.dataArray).length && (
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
