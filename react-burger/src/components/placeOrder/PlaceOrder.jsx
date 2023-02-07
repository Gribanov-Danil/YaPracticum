import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IconfyText} from "../iconfyText/IconfyText";
import placeOrderStyles from "./placeOrder.module.css"
export const PlaceOrder = () => {
    return (
        <div className={placeOrderStyles.placeOrder}>
            <IconfyText
                text={"1234567890"}
                textClass={"text_type_digits-medium"}
                iconLocation={"right"}
                gapInPx={8}
                icon={<CurrencyIcon type="primary" />}
            />
            <Button htmlType="button" type="primary" size="medium">
                Оформить заказ
            </Button>
        </div>
    )
}