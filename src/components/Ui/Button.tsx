import React from "react"
import styled from "styled-components"
import mixins from "../../theme/mixins"

const Button = styled.button`
  ${mixins.colored.primary};
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-shadow: 1px 1px 2px ${props => props.theme.darkerOne};
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
  ${mixins.shadowed.defaultLight.small}
  text-shadow: 1px 1px 2px ${props => props.theme.contrast_darkerOne};
  color: white;
  & span{
    color: white;

  }
`
const ButtonContrastOverPrimary = styled(Button)`
  ${mixins.colored.contrast}
  ${mixins.shadowed.default.small}
  text-shadow: 1px 1px 2px ${props => props.theme.contrast_darkerOne};
`

const ButtonSecondaryPrimary = styled(Button)`
  background: ${props => props.theme.default_lighterTwo};
  box-shadow: none;
  border: none;
  color: ${props => props.theme.default_darkerOne};
  text-shadow: 1px 1px 2px ${props => props.theme.default_lighterTwo};
`

export default {
  PrimaryPrimary: ButtonOverPrimary,
  PrimaryDefault: ButtonOverDefault,
  ContrastPrimary: ButtonContrastOverPrimary,
  ContrastDefault: ButtonContrastOverDefault,
  SecondaryPrimary: ButtonSecondaryPrimary,
}
