import styled, { css } from "styled-components"
import mixins from "../../theme/mixins"
export const Container = styled.div`
  display: block;
  grid-column: LXL / RXL 1;
  padding: 40px 0;
`

const ControlBar = styled.div`
  grid-column: LXL / RXL 1;
  h1 {
    font-size: 0.8rem;
    ${(props: any) =>
      props.completed
        ? css`
            text-decoration: line-through;
          `
        : css`
            text-decoration: none;
          `}
  }
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 6px 12px;
  ${mixins.shadowed.inner.primary}
  border-radius:30px;
`

const Navigation = styled.button`
  font-size: 0.8rem;
  grid-column: 3/4;
`
export default {
  Container,
  ControlBar,
  Navigation,
}
