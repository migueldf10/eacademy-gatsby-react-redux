import styled from "styled-components"
import mixins from "../../theme/mixins"

const Wrapper = styled.footer`
  grid-column: LB / RB 1;
  ${mixins.colored.flat.primary}
  ${mixins.grid.basic}
`

const Container = styled.div`
  grid-column: LXL / RXL 1;
  padding: 12px 32px;
  text-align: center;
`

export default {
  Wrapper,
  Container,
}
