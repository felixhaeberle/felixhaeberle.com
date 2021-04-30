import ExternalLink from '../1_atoms/ExternalLink'
import Image from 'next/image';
import Text from '../1_atoms/Text'
import media from '../0_helpers/viewportValues'
import styled from 'styled-components'
import { useMediaQuery } from '../0_helpers/viewport';

const StackItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: calc(var(--unit)*8.75) 0;
  padding: calc(var(--unit)*3.75) calc(var(--unit)*3.375);
  background-color: var(--colorButtonBg);
  border: 1px solid rgba(var(--colorTextDarkRBG),0.2);

  r-grid {
    width: 100%;
    grid-row-gap: calc(var(--rowGap)*0.75);
  }
`

StackItem.TextWrapper = styled.div`  
  > ${Text.Mono.Dark} {
    margin-bottom: calc(var(--unit)*3.5);
  }

  > ${Text.Small.Dark} {
    max-width: calc(var(--unit)*43.75);
    margin-bottom: calc(var(--unit)*3.75);
  }
`

StackItem.LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  ${media.lessThan('small')`
    flex-wrap: wrap;
  `}
`

const LogoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  ${media.lessThan('small')`
    width: 33%;
    margin-top: calc(var(--unit)*2.5);
  `}
`

LogoItem.Text = styled(Text.Small.Dark)`
  margin-top: calc(var(--unit)*2.625);
  max-width: calc(var(--unit)*12.5);
  text-align: center;
`


export default function Stack() {
  const isMediumBreakpoint = useMediaQuery(1024)
  let imageSize = isMediumBreakpoint ? 45 : 65

  return (
    <StackItem>
      <r-grid columns="6" columns-m="6" columns-xs="2">
        <r-cell span="2" span-s="6">
        {/* Text */}
        <StackItem.TextWrapper>
          <Text.Mono.Dark>{'The Stack'}</Text.Mono.Dark>
          <Text.Small.Dark>{`This website is an envolving experiment. I decided to open-source it – helping people all around the world learning how to code. If you have any questions to the stack feel free to ask in an issue.`}</Text.Small.Dark>
          <ExternalLink title={'github'} link={'https://github.com/felixhaeberle'} />
        </StackItem.TextWrapper>
        </r-cell>
        <r-cell span="4" span-s="6">
        {/* Logos */}
        <StackItem.LogoWrapper>
          <LogoItem>
            <Image src="/images/stack/logos/carbon.svg" height={imageSize} width={imageSize} />
            <LogoItem.Text>Carbon</LogoItem.Text>
          </LogoItem>
          <LogoItem>
            <Image src="/images/stack/logos/sanity.svg" height={imageSize} width={imageSize} />
            <LogoItem.Text>Sanity</LogoItem.Text>
          </LogoItem>
          <LogoItem>
            <Image src="/images/stack/logos/next.svg" height={imageSize} width={imageSize} />
            <LogoItem.Text>Next.js</LogoItem.Text>
          </LogoItem>
          <LogoItem>
            <Image src="/images/stack/logos/styled-components.svg" height={imageSize} width={imageSize} />
            <LogoItem.Text>Styled Components</LogoItem.Text>
          </LogoItem>
          <LogoItem>
            <Image src="/images/stack/logos/storybook.svg" height={imageSize} width={imageSize} />
            <LogoItem.Text>Storybook</LogoItem.Text>
          </LogoItem>
        </StackItem.LogoWrapper>
        </r-cell>
      </r-grid>
    </StackItem>
  )
}