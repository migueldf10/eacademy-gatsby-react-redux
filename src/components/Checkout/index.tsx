import React from "react"
import { CheckoutWrapper, CheckoutContainer, CheckoutHeader } from "./styled"
import { Button } from "../Ui"
import { useSelector, useDispatch } from "react-redux"
import { finishCheckout, stopCheckout } from "../../state/commerce/actions"
import { getActiveCheckout } from "../../state/commerce/selectors"

export default function Checkout() {
  const dispatch = useDispatch()
  const activeCheckout = useSelector(getActiveCheckout)
  const finishOrder = () => {
    dispatch(finishCheckout(activeCheckout.id))
  }
  const cancelOrder = () => {
    dispatch(stopCheckout())
  }

  return (
    <CheckoutWrapper>
      <CheckoutHeader>
        <span>Secured by Miguel xD</span>
        <Button onClick={cancelOrder}>Back to shop</Button>
      </CheckoutHeader>
      <CheckoutContainer>
        <form>
          <input placeholder={"Field 1"} />
          <input placeholder={"Field 2"} />
        </form>
        <Button onClick={finishOrder}>Finish checkout</Button>
      </CheckoutContainer>
      <CheckoutContainer></CheckoutContainer>
    </CheckoutWrapper>
  )
}
