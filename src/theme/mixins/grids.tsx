import { css } from "styled-components"

const grid = css`
  display: grid;
  grid-template-columns:
    [LB] 1fr [LXL] minmax(11ch, 0.7fr) [LS] repeat(3, [C] 21.66ch)
    [RS] minmax(11ch, 0.7fr) [RXL] 1fr [RB];

  @media (max-width: 768px) {
    grid-template-columns:
      [LB] 1fr [LXL] 1fr [LS] repeat(2, [C] 29ch)
      [RS] 1fr [RXL] 1fr [RB];
  }
  @media (max-width: 568px) {
    grid-template-columns:
      [LB] 1fr [LXL] 1fr [LS] repeat(2, [C] 20ch)
      [RS] 1fr [RXL] 1fr [RB];
  }
  @media (max-width: 420px) {
    grid-template-columns:
      [LB] 1fr [LXL] 1fr [LS] repeat(2, [C] 15ch)
      [RS] 1fr [RXL] 1fr [RB];
  }
`

const centered = css`
  ${grid};
  grid-template-rows: auto 1fr auto 1fr;
`

export default {
  basic: grid,
  centered: centered,
}
