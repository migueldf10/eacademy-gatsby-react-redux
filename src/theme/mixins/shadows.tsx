import { css } from "styled-components"

const shadowPrimarySmall = css`
  box-shadow: 2px 2px 4px -1px ${props => props.theme.darkerOne},
    -1px -1px 2px -1px ${props => props.theme.lighterTwo};
`
const shadowPrimaryLarge = css`
  box-shadow: 6px 6px 6px ${props => props.theme.darkerOne},
    -3px -3px 3px ${props => props.theme.lighterOne};
`

const shadowDefaultSmall = css`
  box-shadow: 2px 2px 3px ${props => props.theme.default_darkerTwo},
    -1px -1px 2px ${props => props.theme.default_lighterOne};
`
const shadowDefaultLarge = css`
  box-shadow: 6px 6px 6px ${props => props.theme.default_darkerOne},
    -3px -3px 3px ${props => props.theme.default_lighterOne};
`
const shadowDefaultLightSmall = css`
  box-shadow: 1px 1px 3px 2px ${props => props.theme.default_lighterOne};
`
const shadowDefaulLighttLarge = css`
  box-shadow: 4px 4px 6px 2px ${props => props.theme.default_lighterOne};
`

const innerPrimary = css`
  box-shadow: inset -2px -2px 2px ${props => props.theme.lighterTwo},
    inset 2px 2px 4px ${props => props.theme.darkerOne};
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
  defaultLight: {
    small: shadowDefaultLightSmall,
    large: shadowDefaulLighttLarge,
  },
  inner: {
    primary: innerPrimary,
  },
}
