import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCart, getActiveCheckout } from "../../state/commerce/selectors"
import { initiateCheckout } from "../../state/commerce/actions"
import Styled from "./styled"
import { Button } from "../Ui"
import locales from "../../utils/locales"
import CartLineItem from "./components/CartLineItem"
import Header from "../Header"

export default function Cart() {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()
  const startOrder = () => {
    console.log("starting order")
    dispatch(initiateCheckout())
  }

  if (cart.length > 0) {
    return (
      <Styled.Wrapper>
        <Header />
        <Styled.Separator />
        <Styled.Container>
          <span className="title">{locales("cart.title")}</span>
          <ul>
            {cart.map((cartItem, index) => (
              <CartLineItem key={index} product={cartItem} />
            ))}
          </ul>
          <Styled.Footer>
            <span>Total: {cart.reduce((a, b) => a + b.price, 0)}</span>
            <Button.PrimaryDefault onClick={startOrder}>
              Start the order!
            </Button.PrimaryDefault>
          </Styled.Footer>
        </Styled.Container>
        <Styled.Separator />
      </Styled.Wrapper>
    )
  } else {
    return null
  }
}
