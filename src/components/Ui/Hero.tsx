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
  grid-column: LS / RS 1;
`
const Body = styled.div`
  grid-column: LS / RS 1;
`

const Footer = styled.div`
  grid-column: LXL/RXL 1;
`

export default {
  Primary,
  Heading,
  Body,
  Footer,
}
