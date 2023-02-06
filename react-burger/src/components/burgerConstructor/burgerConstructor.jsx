import {ConstructorPanel} from "../constructorPanel/ConstructorPanel";
import {PlaceOrder} from "../placeOrder/PlaceOrder";
import PropTypes from "prop-types";

export const BurgerConstructor = (props) => {
    return (
        <div className="mt-25">
            <ConstructorPanel data={props.data}/>
            <PlaceOrder/>
        </div>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number,
    })),
}