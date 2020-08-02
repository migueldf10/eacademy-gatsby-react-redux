import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../../../state/commerce/actions"
import Styled from "../styled"

export default function CartLineItem({ product }) {
  const dispatch = useDispatch()
  const removeItem = () => {
    dispatch(removeFromCart(product.id))
  }
  return (
    <Styled.LineItem>
      {product.title} -{" "}
      <span className={"price"}>
        {product.price} E<button onClick={removeItem}>x</button>
      </span>
    </Styled.LineItem>
  )
}
