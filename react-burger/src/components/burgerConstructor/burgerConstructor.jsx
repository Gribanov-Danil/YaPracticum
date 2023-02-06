import {ConstructorPanel} from "../constructorPanel/ConstructorPanel";
import {PlaceOrder} from "../placeOrder/PlaceOrder";

export const BurgerConstructor = ({data}) => {
    return (
        <div className="mt-25">
            <ConstructorPanel data={data}/>
            <PlaceOrder/>
        </div>
    )
}