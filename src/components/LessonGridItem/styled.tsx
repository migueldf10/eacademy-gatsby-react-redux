import styled,{css} from "styled-components"
import mixins from '../../theme/mixins'
const Container = styled.div`
  ${mixins.colored.primary}
  display: grid;
  grid-gap:12px;
  align-items:center;
  padding: 32px 16px;
  border-radius: 8px;
  margin-bottom: 32px;
  grid-template-columns: auto 42px;
  ${mixins.shadowed.defaultLight.large};
`

const ToggleIndicator = styled.button`
  width:16px;
  height:16px;
  box-sizing:border-box;
  border-radius:10px;
  ${mixins.shadowed.primary.small};
  ${(props:any)=>props.pressed? css`
    border: 0px;
    background: ${props=>props.theme.contrast_primary};
    
    `:css`
    border: 3px solid ${props=>props.theme.contrast_primary};
    background: white;
  
  `}
`

const Title = styled.div`
  grid-column: 1 /2;
  ${(props:any)=>props.completed? css`
    text-decoration:line-through;
    
    `:css`
    text-decoration:none;
  
  `}
`
const Controls = styled.div`
  grid-column: 2 /3;
`
export default {
  Container,
  ToggleIndicator,
  Title,
  Controls,
}