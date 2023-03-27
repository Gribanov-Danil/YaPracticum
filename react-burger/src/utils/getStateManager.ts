import {TUserDataState} from "../service/reducers/userDataSlice";
import {TOrderDetailsState} from "../service/reducers/orderDetailsSlice";
import {PickedIngredientSliceState} from "../service/reducers/pickedIngredientsSlice";
import {IngredientsSliceState} from "../service/reducers/ingredientsSlice";

// TODO разобрать state: any
export class GetStateManager {
    static GetUserData(): (state: any) => TUserDataState  {
        return (state) => state.userDataReducer
    }

    static GetOrderDetails(): (state: any) => TOrderDetailsState  {
        return (state) => state.orderDetailsReducer
    }

    static GetPickedIngredients(): (state: any) => PickedIngredientSliceState  {
        return (state) => state.pickedIngredientsReducer
    }

    static GetIngredients(): (state: any) => IngredientsSliceState {
        return (state) => state.ingredientsReducer
    }
}