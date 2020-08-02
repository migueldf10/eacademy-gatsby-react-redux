import styled, { css } from "styled-components"
import mixins from "../../theme/mixins"

type Hero = any

const Section = styled.section`
  grid-column: LB / RB 1;
  ${mixins.grid.basic}
`

const Wrapper = styled(Section)`
  ${mixins.colored.flat.primary}
  padding: 40px 0 0px;
`

const Heading = styled.h1`
  grid-column: LXL / RXL 1;
  font-size: 4rem;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 2.1rem;
  }
  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`

const Body = styled.div`
  grid-column: LXL / RXL 1;
`

const Footer = styled.div`
  grid-column: LXL/RXL 1;
  padding: 32px 0;
`

const WrapperWithOverlap = styled(Wrapper)`
  padding-bottom: 200px;
  margin-bottom: -200px;
`

const Overline = styled.div`
  grid-column: LS / RS 1;
  text-transform: uppercase;
  font-weight: 700;
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`
const Hero: Hero = {
  Wrapper,
  Heading,
  Body,
  Footer,
  WrapperWithOverlap,
  Overline,
}
export default Hero
