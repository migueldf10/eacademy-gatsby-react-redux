import styled from "styled-components"

type Props = {
  Wrapper: any
  Container: any
}

const AdminBarStyled: Props = { Wrapper: {}, Container: {} }

AdminBarStyled.Wrapper = styled.div`
  grid-column: LB / RB 1;
  background: lightgoldenrodyellow;
  flex-direction: row;
  padding: 12px 16px;
`

AdminBarStyled.Container = styled.div`
  display: flex;
  max-width: 960px;
  margin: auto;
  justify-content: space-between;
`

export default AdminBarStyled
