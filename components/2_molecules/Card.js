import Date from '../0_helpers/date'
import Link from 'next/link'
import Text from '../1_atoms/Text'
import media from '../0_helpers/viewportValues'
import styled from 'styled-components'
import { urlFor } from '../../lib/sanity'

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: calc(var(--unit)* 4.5);
`;

CardItem.Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: calc(var(--unit)* 1.25);
`

CardItem.TextWrapper = styled.div`
  max-width: 90%;

  ${media.lessThan('small')`
    max-width: 100%;
  `}
`

CardItem.TextSmall = styled(Text.Small)`
  display: inline-block;
  color: var(--colorTextDarker);
`

CardItem.TextSmallDark = styled(Text.Small.Dark)`
  display: inline;
`

CardItem.Date = styled(Text.Mono.Dark)`
  font-size: var(--fontSizeMedium);
  margin-left: calc(var(--unit)*2.5);
  margin-bottom: 0;
`

const CardImage = styled.img`
  object-fit: cover;

  &.opened {
    object-fit: unset;
  }
`

CardItem.ImageWrapper = styled.div`
  margin-bottom: calc(var(--unit)* 1.75);

  &&.screenshot {
    background-color: var(--colorButtonBg);
    position: relative;
    height: 180px;
    max-width: 90%;

    &:hover {
      &::before {
        opacity: 0.85;
      }
    }

    ${media.lessThan('small')`
      max-width: 100%;
    `}

    ${CardImage} {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

     &::before {
       content: ' ';
       height: 100%;
       width: 100%;
       position: absolute;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       z-index: 1001;
       opacity: 1;
       background: linear-gradient(180deg, rgba(var(--colorButtonBgRGB), 0.1) 50%, var(--colorButtonBg) 100%);
       transition: 150ms opacity ease-in;
    }
  }
`

export default function Card ({image, imageAlt, title, link, text, year, date, isWork}) {
  return (
    <Link href={link} passHref>
      <a {...( isWork && { target: "_blank" })} >
        <CardItem>
          {image ? (
             isWork ? (
              <CardItem.ImageWrapper className={'screenshot'}>
                <CardImage 
                  {...( imageAlt && { alt: imageAlt })} 
                  src={urlFor(image).width(390).height(216).url()} 
                  width="260" 
                  height="144" />
              </CardItem.ImageWrapper>
            ) : (
            <CardItem.ImageWrapper>
              <CardImage 
                {...( imageAlt && { alt: imageAlt })} 
                className={'img-zoomable'} 
                src={urlFor(image).width(350).height(150).url()} 
                width="350" 
                height="150" />
            </CardItem.ImageWrapper>
            )
          ) : ''}
          <CardItem.Header>
            <Text>{title}</Text>
            {year ? 
              <CardItem.Date>
                <Date dateString={year} formatString={'yyyy'}/>
              </CardItem.Date> : ''}     
          </CardItem.Header>
          {date ?
            <CardItem.TextWrapper>
              <CardItem.TextSmallDark>{text} </CardItem.TextSmallDark> 
              <CardItem.TextSmall><Date dateString={date} formatString={'LLL, yyyy'}/></CardItem.TextSmall>
            </CardItem.TextWrapper>
            : <CardItem.TextWrapper>
                <Text.Small.Dark>{text}</Text.Small.Dark>
              </CardItem.TextWrapper> }
        </CardItem>
      </a>
    </Link>
  )
}
