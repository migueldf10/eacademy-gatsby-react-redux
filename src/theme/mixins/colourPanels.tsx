import { css } from "styled-components"

const coloredPrimary = css`
  background: linear-gradient(
    135deg,
    ${props => props.theme.lighterOne},
    ${props => props.theme.primary}
  );
  border: 1px solid ${props => props.theme.primary};
`
const coloredDefault = css`
  background: linear-gradient(
    135deg,
    white,
    ${props => props.theme.default_lighterTwo}
  );
  color: black;
  border: 1px solid ${props => props.theme.default_primary};
`
const coloredContrast = css`
  background: linear-gradient(
    135deg,
    ${props => props.theme.contrast_lighterOne},
    ${props => props.theme.contrast_primary}
  );
  border: 1px solid ${props => props.theme.contrast_primary};
`

const flatPrimary = css`
  background: ${props => props.theme.primary};
  color: white;
`
const flatContrast = css`
  background: ${props => props.theme.contrast_primary};
  color: white;
`
const flatDefault = css`
  background: ${props => props.theme.default_primary};
  color: black;
`

export default {
  primary: coloredPrimary,
  default: coloredDefault,
  contrast: coloredContrast,
  flat: {
    primary: flatPrimary,
    contrast: flatContrast,
    default: flatDefault,
  },
}
