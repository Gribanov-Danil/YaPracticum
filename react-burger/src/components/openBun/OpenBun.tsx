import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {IIngredient} from "../../utils/interfaces";
import {FC} from "react";

interface IOpenBun {
    bun: IIngredient
}

export const OpenBun: FC<IOpenBun> = ({bun}) => {
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