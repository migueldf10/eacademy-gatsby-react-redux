import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  padding: 12px 16px;
  * {
    margin: 0;
  }
`
export const HeaderWrapper = styled.div`
  grid-column: LB / RB 1;
  background: lightsteelblue;
`
