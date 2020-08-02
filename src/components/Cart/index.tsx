import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCart, getActiveCheckout } from "../../state/commerce/selectors"
import { initiateCheckout } from "../../state/commerce/actions"
import Styled from "./styled"
import { Button } from "../Ui"
import locales from "../../utils/locales"
import CartLineItem from "./components/CartLineItem"
import Header from "../Header"
import { getUser } from "../../state/session/selectors"
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"

export default function Cart() {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()
  const startOrder = () => {
    console.log("starting order")
    dispatch(initiateCheckout())
  }
  const user = useSelector(getUser)

  if (cart.length > 0) {
    return (
      <Styled.Wrapper>
        <Header />
        <Styled.Separator />
        <Styled.Container>
          <Styled.Title>
            <h1 className="title">{locales("cart.title")}</h1>
          </Styled.Title>
          <ul>
            {cart.map((cartItem, index) => (
              <CartLineItem key={index} product={cartItem} />
            ))}
          </ul>
          <Styled.Summary>
            <h3>Total: {cart.reduce((a, b) => a + b.price, 0)}€</h3>
          </Styled.Summary>
          <Styled.Footer>
            {user.nickname ? (
              <Button.PrimaryDefault onClick={startOrder}>
                Start the order!
              </Button.PrimaryDefault>
            ) : (
              <Button.PrimaryDefault onClick={() => login()}>
                Login or create an account
              </Button.PrimaryDefault>
            )}
          </Styled.Footer>
        </Styled.Container>
        <Styled.Separator />
      </Styled.Wrapper>
    )
  } else {
    return null
  }
}
