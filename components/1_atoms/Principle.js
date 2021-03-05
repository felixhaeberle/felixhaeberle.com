import styled from 'styled-components'
import Text from './Text'

const PrincipleItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
`

PrincipleItem.Header.Count.Text = styled(Text.Mono.Dark)`
  margin-bottom: 0;
`;

PrincipleItem.Header.Text = styled(Text.Mono.Dark)`
  margin-left: calc(var(--unit)*2.5);
  margin-bottom: 0;
`;


export default function Principle(){
  return (
    <PrincipleItem>
      <PrincipleItem.Header>
        <PrincipleItem.Header.Count>
          <PrincipleItem.Header.Count.Text>
            1
          </PrincipleItem.Header.Count.Text>
        </PrincipleItem.Header.Count>
        <PrincipleItem.Header.Text>This is an example</PrincipleItem.Header.Text>
      </PrincipleItem.Header>
      <Text>This is an example text with some example content.</Text>
      <Text.Small.Dark>This is an example text with some example content. This is an example text with some example content.</Text.Small.Dark>
    </PrincipleItem>
  )
}