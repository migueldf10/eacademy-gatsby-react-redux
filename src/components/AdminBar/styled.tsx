import styled from "styled-components"

type Props = {
  Wrapper: any
  Container: any
}

const AdminBarStyled: Props = { Wrapper: {}, Container: {} }

AdminBarStyled.Wrapper = styled.div`
  grid-column: LB / RB 1;
  background: lightgoldenrodyellow;
  padding: 12px 16px;
`

AdminBarStyled.Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 960px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`

export default AdminBarStyled
