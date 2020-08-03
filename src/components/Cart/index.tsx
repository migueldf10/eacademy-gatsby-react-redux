import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCart, getActiveCheckout } from "../../state/commerce/selectors"
import { initiateCheckout } from "../../state/commerce/actions"
import { getUiState } from "../../state/ui/selectors"
import Styled from "./styled"
import { Button } from "../Ui"
import locales from "../../utils/locales"
import CartLineItem from "./components/CartLineItem"
import Header from "../Header"
import { getUser } from "../../state/session/selectors"
import { login } from "../../utils/auth"
import { hideCart } from "../../state/ui/actions"
export default function Cart() {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()
  const startOrder = () => {
    console.log("starting order")
    dispatch(initiateCheckout())
  }
  const user = useSelector(getUser)
  const uiState = useSelector(getUiState)

  if (cart.length > 0 && uiState.displayCart) {
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
              <>
                <Button.PrimaryDefault onClick={startOrder}>
                  Start the order!
                </Button.PrimaryDefault>
              </>
            ) : (
              <Styled.Actions>
                <div>
                  <h5>Finish your purchase</h5>
                  <h5>Step 1:</h5>
                </div>
                <Button.PrimaryDefault onClick={() => login()}>
                  <span>Login or create an account</span>
                </Button.PrimaryDefault>
                <Button.SecondaryPrimary onClick={() => dispatch(hideCart())}>
                  <span>Keep buying</span>
                </Button.SecondaryPrimary>
              </Styled.Actions>
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
