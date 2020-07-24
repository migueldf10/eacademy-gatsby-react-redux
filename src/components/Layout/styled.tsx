import styled from "styled-components"

export const AppContainer = styled.div`
  margin: 0px;
  display: grid;
  grid-template-columns:
    [LB] 1fr [LXL] minmax(11ch, 0.7fr) [LS] repeat(3, [C] 21.66ch)
    [RS] minmax(11ch, 0.7fr) [RXL] 1fr [RB];

  @media (max-width: 768px) {
    grid-template-columns:
      [LB] 1fr [LXL] 1fr [LS] repeat(2, [C] 16ch)
      [RS] 1fr [RXL] 1fr [RB];
  }
`
export const CheckoutContainer = styled.div`
  grid-column: LS / RS 1;
  padding: 60px 0;
`
