import {ConstructorPanel} from "../constructorPanel/ConstructorPanel";
import {PlaceOrder} from "../placeOrder/PlaceOrder";
import {dataPropTypes} from "../../utils/prop-types";

export const BurgerConstructor = () => {
    return (
        <div className="mt-25">
            <ConstructorPanel/>
            <PlaceOrder/>
        </div>
    )
}

BurgerConstructor.propTypes = dataPropTypes