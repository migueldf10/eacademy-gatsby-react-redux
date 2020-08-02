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
  padding: 12px;
  position: relative;
  padding-top: 24px;
  margin-top: 12px;
  border-radius: 8px;
  ul {
    padding: 0px;
    margin: 0px;
  }
  .title {
    position: absolute;
    right: 14px;
    top: 8px;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
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
  padding: 10px 22px 10px 0px;

  .price {
    position: absolute;
    right: 5px;
  }
`

export default { Wrapper, Container, Footer, LineItem, Separator }
