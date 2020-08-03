import styled from "styled-components"
import mixins from "../../theme/mixins"

const Wrapper = styled.div`
  position: fixed;
  ${mixins.grid.centered}
  ${mixins.colored.flat.primary}
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`

const Separator = styled.div`
  grid-column: LB / RB 1;
`

const Container = styled.div`
  grid-column: LS / RS 1;
  ${mixins.colored.default}
  ${mixins.shadowed.primary.large}
  padding: 32px 16px;
  position: relative;
  border-radius: 8px;
  ul {
    padding: 0px;
    margin: 0px;
  }
`
const Title = styled.div`
  text-align: center;
`
const Summary = styled.div`
  text-align: center;
`

const Footer = styled.div`
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  padding-top: 14px;
  justify-content: space-between;
`

const LineItem = styled.li`
  list-style: none;
  border-top: 1px solid gray;
  display: grid;
  grid-template-columns: minmax(180px, 1fr) 34px 4fr auto;
  align-items: center;
  padding: 16px 6px 16px 6px;
  background: ${props => props.theme.default_lighterTwo};
  h4,
  span,
  div,
  button {
    margin: 0;
  }
  border-bottom: 1px solid ${props => props.theme.default_halfUp};
`

const RemoveButton = styled.button`
  border: none;
  box-shadow: none;
  background: none;
`

export default {
  Title,
  Wrapper,
  Container,
  Footer,
  LineItem,
  Separator,
  RemoveButton,
  Summary,
}
