import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";

export const ClosingBun = ({bun}) => {
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