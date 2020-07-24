import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCart, getActiveCheckout } from "../../state/commerce/selectors"
import { initiateCheckout } from "../../state/commerce/actions"
import { CartWrapper } from "./styled"

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
        <h1>This is the cart</h1>
        {cart.map((cartItem, index) => (
          <li key={index}>{cartItem.title}</li>
        ))}
        <button onClick={startOrder}>Start the order!</button>
      </CartWrapper>
    )
  } else {
    return null
  }
}
