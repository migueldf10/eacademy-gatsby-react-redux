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
      <h4>{product.title}</h4>
      <span className={"price"}>{product.price} €</span>
      <div />
      <Styled.RemoveButton onClick={removeItem}>X</Styled.RemoveButton>
    </Styled.LineItem>
  )
}
