import styled from "styled-components"
import mixins from "../../theme/mixins"
export const MyCoursesGridItemContainer = styled.div`
  padding: 42px 16px;
  display: block;
  margin-bottom: 32px;
  border: 2px solid black;
  ${mixins.colored.primary}
  ${mixins.shadowed.defaultLight.large}
  border-radius: 8px;
`
