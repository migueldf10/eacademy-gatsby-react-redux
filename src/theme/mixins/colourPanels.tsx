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
    ${props => props.theme.default_lighterOne},
    ${props => props.theme.default_primary}
  );
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

export default {
  primary: coloredPrimary,
  default: coloredDefault,
  contrast: coloredContrast,
}
