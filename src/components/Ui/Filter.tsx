import styled, { css } from "styled-components"
import mixins from "../../theme/mixins"

const Item: any = styled.div`
  display: inline-block;
  padding: 10px 16px 7px;
  border-radius: 18px;
  margin: 0px 12px 5px 10px;

  ${props =>
    props.pressed
      ? css`
          ${mixins.shadowed.inner.primary}
        `
      : css`
          ${mixins.shadowed.primary.small}
        `}
`

export default {
  Item,
}
