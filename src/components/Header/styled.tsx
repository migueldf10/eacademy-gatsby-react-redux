import styled from "styled-components"

export const HeaderContainer = styled.header`
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
export const HeaderWrapper = styled.div`
  grid-column: LB / RB 1;
  background: lightsteelblue;
`
