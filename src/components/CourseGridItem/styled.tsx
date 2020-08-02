import styled from "styled-components"
import mixins from "../../theme/mixins"

export const CardContainer = styled.div`
  padding: 40px 0px;
  ${mixins.colored.contrast}
  ${mixins.shadowed.default.large}
  display: block;
  margin-bottom: 50px;
  border-radius: 14px;
  padding: 32px 16px;
`
