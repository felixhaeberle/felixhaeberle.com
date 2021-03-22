import dynamic from 'next/dynamic'
import styled, { css } from 'styled-components'
import Text from './Text'

const ButtonItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: var(--colorButtonBg);
padding: calc(var(--unit)*2.25) calc(var(--unit)*2.5);
margin-bottom: calc(var(--unit)* 4.5);
max-width: 300px;

&:hover {
  cursor: pointer;

  .button-icon {
    animation: ${props => ((props.symbol === 'Voicemail24') ? 'wiggle 500ms 1 ease-in-out' : 'none')};
  }
}
`

ButtonItem.Text = styled(Text)`
color: var(--colorTextDark);
`

export default function Button ({title, symbol}) {
  ButtonItem.Symbol = dynamic(() => import('@carbon/icons-react').then((mod) => mod[symbol]))
  
  return (
    <ButtonItem>
      <ButtonItem.Text>{title}</ButtonItem.Text>
      <ButtonItem.Symbol className="button-icon"></ButtonItem.Symbol>
    </ButtonItem>
  )
}