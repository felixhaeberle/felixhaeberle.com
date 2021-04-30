import Text from '../1_atoms/Text';
import styled from 'styled-components'

const CVSection = styled.div`
  position: sticky;
  top: 40px;
  border-top: 1px solid var(--colorTextDark);
  padding-top: calc(var(--unit)*2.5);
`

CVSection.Headline = styled(Text.Mono.Dark)`
  margin: 0;
`;

export default function CVHeader({title}){
  return (
    <CVSection>
      <CVSection.Headline>
        {title}
      </CVSection.Headline>
    </CVSection>
  )
}