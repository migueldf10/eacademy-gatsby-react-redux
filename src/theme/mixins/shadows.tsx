import { css } from "styled-components"

const shadowPrimarySmall = css`
  box-shadow: 4px 4px 4px ${props => props.theme.darkerOne},
    -2px -2px 2px ${props => props.theme.lighterOne};
`
const shadowPrimaryLarge = css`
  box-shadow: 6px 6px 6px ${props => props.theme.darkerOne},
    -3px -3px 3px ${props => props.theme.lighterOne};
`

const shadowDefaultSmall = css`
  box-shadow: 2px 2px 3px ${props => props.theme.default_darkerOne},
    -1px -1px 2px ${props => props.theme.default_lighterTwo};
`
const shadowDefaultLarge = css`
  box-shadow: 6px 6px 6px ${props => props.theme.default_darkerOne},
    -3px -3px 3px ${props => props.theme.default_lighterOne};
`

export default {
  primary: {
    small: shadowPrimarySmall,
    large: shadowPrimaryLarge,
  },
  default: {
    small: shadowDefaultSmall,
    large: shadowDefaultLarge,
  },
}
