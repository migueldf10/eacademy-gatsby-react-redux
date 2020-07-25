import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCart, getActiveCheckout } from "../../state/commerce/selectors"
import { initiateCheckout } from "../../state/commerce/actions"
import { CartWrapper, CartFooter } from "./styled"
import { Button } from "../Ui"
import locales from "../../utils/locales"
import CartLineItem from "./components/CartLineItem"

export default function Cart() {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()
  const startOrder = () => {
    console.log("starting order")
    dispatch(initiateCheckout())
  }

  if (cart.length > 0) {
    return (
      <CartWrapper>
        <span className="title">{locales("cart.title")}</span>
        <ul>
          {cart.map((cartItem, index) => (
            <CartLineItem key={index} product={cartItem} />
          ))}
        </ul>
        <CartFooter>
          <span>Total: {cart.reduce((a, b) => a + b.price, 0)}</span>
          <Button onClick={startOrder}>Start the order!</Button>
        </CartFooter>
      </CartWrapper>
    )
  } else {
    return null
  }
}
