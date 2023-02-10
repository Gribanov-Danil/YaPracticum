import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {dataElementWithCustomFieldPropTypes} from "../../utils/prop-types";

export const OpenBun = ({bun}) => {
    return (
        <div className="ml-8">
            <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
            />
        </div>
    )
}

OpenBun.propTypes = dataElementWithCustomFieldPropTypes("bun")