import Text from '../1_atoms/Text'
import media from '../0_helpers/viewportValues'
import styled from 'styled-components'

const PrincipleItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: calc(var(--unit)*10);

  ${media.lessThan('medium')`
    margin-top: margin-top: calc(var(--unit)*5);
  `}

  ${Text} {
    margin-bottom: calc(var(--unit)*1.875);
  }
`

PrincipleItem.Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: calc(var(--unit)*4.375);
`

PrincipleItem.Header.Count = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--unit)*6.25);
  width: calc(var(--unit)*6.25);
  background-color: var(--colorButtonBg);
  padding: calc(var(--unit)*2) calc(var(--unit)*2.5);
  border: 1px solid rgba(var(--colorTextDarkRBG),0.2);
`

PrincipleItem.Header.Count.Text = styled(Text.Mono.Dark)`
  margin-bottom: 0;
`;

PrincipleItem.Header.Text = styled(Text.Mono.Dark)`
  margin-left: calc(var(--unit)*2.5);
  margin-bottom: 0;
`;


export default function Principle({ card, index }){
  card.card_text = card.card_text.includes('<br') ? card.card_text : card.card_text.split(",").join(",<br />")
  return (
    <PrincipleItem>
      <PrincipleItem.Header>
        <PrincipleItem.Header.Count>
          <PrincipleItem.Header.Count.Text>
            { index }
          </PrincipleItem.Header.Count.Text>
        </PrincipleItem.Header.Count>
        <PrincipleItem.Header.Text>{ card.card_header_text }</PrincipleItem.Header.Text>
      </PrincipleItem.Header>
      <Text dangerouslySetInnerHTML={{__html: card.card_text}}></Text>
      <Text.Small.Dark>{ card.card_description }</Text.Small.Dark>
    </PrincipleItem>
  )
}