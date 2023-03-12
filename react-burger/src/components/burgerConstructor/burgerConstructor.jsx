import {ConstructorPanel} from "../constructorPanel/ConstructorPanel";
import {PlaceOrder} from "../placeOrder/PlaceOrder";

export const BurgerConstructor = () => {
    return (
        <div className="mt-25">
            <ConstructorPanel/>
            <PlaceOrder/>
        </div>
    )
}
