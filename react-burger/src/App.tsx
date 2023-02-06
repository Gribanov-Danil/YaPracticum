import './App.css';
import {AppHeader} from "./components/appHeader/AppHeader";
import {Page} from "./components/page/Page";
import {BurgerIngredients} from "./components/burgerIngredients/BurgerIngredients";
import {data} from "./utils/data"
import {BurgerConstructor} from "./components/burgerConstructor/burgerConstructor";

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <main>
            <Page>
                <BurgerIngredients data={data}/>
                <BurgerConstructor data={data}/>
            </Page>
        </main>
    </div>
  );
}

export default App;
