import styled from "styled-components"
import mixins from "../../theme/mixins"
type Props = {
  Wrapper: any
  Container: any
}

const AdminBarStyled: Props = { Wrapper: {}, Container: {} }

const Wrapper = styled.div`
  grid-column: LB / RB 1;
  background: lightgoldenrodyellow;
  padding: 12px 16px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 960px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`

const Editor = styled.div`
  max-width: 960px;
  margin: auto;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
  }
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
  column-gap: 20px;
`

export default { Wrapper, Container, Editor }
