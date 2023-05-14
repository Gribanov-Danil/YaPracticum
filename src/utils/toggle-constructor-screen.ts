/**
 * Функция, переключающая BurgerIngredients и BurgerConstructorMobile
 */
export const toggleScreen = () => {
  const burgerIngredients = document.querySelector("#BurgerIngredients")
  const burgerConstructorMobile = document.querySelector("#BurgerConstructorMobile")
  const amountOrder = document.querySelector("#amountOrder")
  const mainHeader = document.querySelector("#pageHeader")
  const placeOrderMobile = document.querySelector("#PlaceOrderMobile")
  burgerIngredients?.classList.toggle("inactive")
  burgerConstructorMobile?.classList.toggle("inactive")
  amountOrder?.classList.toggle("inactive")
  placeOrderMobile?.classList.toggle("inactive")
  mainHeader?.classList.toggle("inactive")
  mainHeader?.classList.toggle("header")
}
