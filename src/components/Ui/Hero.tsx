import styled from "styled-components"
import mixins from "../../theme/mixins"

type Hero = any
const Section = styled.section`
  grid-column: LB / RB 1;
  ${mixins.grid.basic}
`

const Primary = styled(Section)`
  ${mixins.colored.flat.primary}
`

const Heading = styled.h1`
  grid-column: LXL / RXL 1;
  font-size: 4rem;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`

const Body = styled.div`
  grid-column: LXL / RXL 1;
`

const Footer = styled.div`
  grid-column: LXL/RXL 1;
  padding: 32px 0;
`

export default {
  Primary,
  Heading,
  Body,
  Footer,
}
