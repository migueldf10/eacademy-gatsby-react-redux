import styled, { css } from "styled-components"
import mixins from "../../theme/mixins"

const Item: any = styled.div`
  display: inline-block;
  border-radius: 18px;
  padding: 8px 16px 7px;
  margin: 0px 16px 16px 0px;

  @media (max-width: 500px) {
    padding: 6px 14px 5px;
    margin: 0px 12px 12px 0px;
    font-size: 0.8em;
  }

  ${props =>
    props.pressed
      ? css`
          ${mixins.shadowed.inner.primary}
          font-weight: 700;
        `
      : css`
          ${mixins.shadowed.primary.small}
        `}
`

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  white-space: nowrap;
  justify-content: flex-start;
  padding: 10px 30px 10px 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`
export default {
  Item,
  Container,
}
