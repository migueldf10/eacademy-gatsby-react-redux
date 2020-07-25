import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCart, getActiveCheckout } from "../../state/commerce/selectors"
import { initiateCheckout } from "../../state/commerce/actions"
import { CartWrapper, CartFooter, CartLineItem } from "./styled"
import { Button } from "../Ui"
import locales from "../../utils/locales"

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
            <CartLineItem key={index}>
              {cartItem.title} -{" "}
              <span className={"price"}>{cartItem.price} E</span>
            </CartLineItem>
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
