import './App.css';
import {AppHeader} from "./components/appHeader/AppHeader";
import {Page} from "./components/page/Page";
import {BurgerIngredients} from "./components/burgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "./components/burgerConstructor/burgerConstructor";
import {useEffect, useState} from "react";

//TODO сделать layout для ошибки getData().catch

function App() {
    const URL = 'https://norma.nomoreparties.space/api/ingredients';
    const [data, setData] = useState({
        dataArray: [],
        isLoading: false
    })
    useEffect( () => {
        const getData = async () => {
            setData({...data, isLoading: true})
            let response = await fetch(URL)
            let result = await response.json()
            setData({...data, dataArray: result.data, isLoading: false})
            console.log(result.data)
    }
    getData().catch(e => console.log("Ошибка загрузки данных"))
    }, [URL])
    console.log(data.dataArray)
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <Page>
                    {!data.isLoading && Object.keys(data.dataArray).length && (
                        <>
                            <BurgerIngredients data={data.dataArray}/>
                            <BurgerConstructor data={data.dataArray}/>
                        </>
                    )}

                </Page>
            </main>
        </div>
    );
}

export default App;
