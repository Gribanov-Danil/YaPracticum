import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {FC} from "react";
import {IIngredient} from "../../utils/interfaces";

interface IClosingBun {
    bun: IIngredient
}

export const ClosingBun:FC<IClosingBun> = ({bun}) => {
    return (
        <div className="ml-8">
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
            />
        </div>
    )
}