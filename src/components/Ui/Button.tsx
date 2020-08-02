import React from "react"
import styled from "styled-components"
import mixins from "../../theme/mixins"

const Button = styled.button`
  ${mixins.colored.primary};
  display:inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  color: ${props => props.theme.lighterTwo};
  font-weight: 700;
`

const ButtonOverPrimary = styled(Button)`
  ${mixins.shadowed.primary.small}
`

const ButtonOverDefault = styled(Button)`
  ${mixins.shadowed.default.small}
`
const ButtonContrastOverDefault = styled(Button)`
  ${mixins.colored.contrast}
  ${mixins.shadowed.default.small}
`
const ButtonContrastOverPrimary = styled(Button)`
  ${mixins.colored.contrast}
  ${mixins.shadowed.default.small}
`

export default {
  PrimaryPrimary: ButtonOverPrimary,
  PrimaryDefault: ButtonOverDefault,
  ContrastPrimary: ButtonContrastOverPrimary,
  ContrastDefault: ButtonContrastOverDefault,
}
