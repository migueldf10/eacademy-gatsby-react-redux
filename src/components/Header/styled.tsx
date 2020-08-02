import styled from "styled-components"
import mixins from "../../theme/mixins"

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 960px;
  padding: 12px 16px;
  * {
    margin: 0;
  }
  h1 {
    font-size: 1.2em;
  }
`
export const Wrapper = styled.div`
  grid-column: LB / RB 1;
  ${mixins.colored.flat.primary}
`
export const Navigation = styled.nav`
  padding: 10px 0;
`

export default {
  Container,
  Wrapper,
  Navigation,
}
