import styled from "styled-components"
import mixins from "../../theme/mixins"

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  max-width: 960px;
  margin: auto;
  column-gap: 20px;
  align-items: center;
  padding: 12px 16px;
  * {
    margin: 0;
  }
  h1 {
    font-size: 1.2em;
    margin: 0px;
  }
  @media (max-width: 500px) {
    column-gap: 15px;
    padding: 12px 10px;
  }
`

export const Wrapper = styled.div`
  grid-column: LB / RB 1;
  ${mixins.colored.flat.primary}
`
export const Navigation = styled.nav`
  padding: 10px 0;
  grid-column: 4/5;
`

export default {
  Container,
  Wrapper,
  Navigation,
}
