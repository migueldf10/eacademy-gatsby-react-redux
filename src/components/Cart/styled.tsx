import styled from "styled-components"

export const CartWrapper = styled.div`
  grid-column: LS / RS 1;
  border: 1px solid gray;
  padding: 12px;
  position: relative;
  padding-top: 24px;
  margin-top: 12px;
  border-radius: 8px;
  background: lightseagreen;
  ul {
    padding: 0px;
    margin: 0px;
  }
  .title {
    position: absolute;
    right: 14px;
    top: 8px;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`
export const CartFooter = styled.div`
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  padding-top: 14px;
  justify-content: space-between;
`
export const CartLineItem = styled.li`
  list-style: none;
  border-top: 1px solid gray;
  padding: 10px 22px 10px 0px;

  .price {
    position: absolute;
    right: 5px;
  }
`
