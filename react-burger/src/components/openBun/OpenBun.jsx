import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";

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