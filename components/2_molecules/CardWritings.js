import { CardItem } from '../2_molecules/Card'
import Date from '../0_helpers/date'
import Image from 'next/image'
import Link from 'next/link'
import Text from '../1_atoms/Text'
import styled from 'styled-components'
import { urlFor } from '../../lib/sanity'

const ShortText = styled(CardItem.TextSmallDark)``, 
      LongText = styled(CardItem.TextSmallDark)``;

const CardWritingsItem = styled(CardItem)`
  margin-bottom: 0;
  
  ${ShortText} {
    margin-bottom: calc(var(--unit)*2);
  }
`

CardWritingsItem.Text = styled(Text)`
  margin-bottom: calc(var(--unit)*1.25);
`
CardWritingsItem.TextSmall = styled(CardItem.TextSmall)`
  margin: calc(var(--unit)*2) 0;
`
CardWritingsItem.ImageWrapper = styled.div`
  opacity: 0.9;
`
CardWritingsItem.Header = styled(CardItem.Header)`
  &&& {
    display: flex;
    flex-direction: column;
  }
`


export default function CardWritings({image, title, link, shortText, longText, date}) {
  return (
    <r-cell span="2">
      <Link href={link} passHref>
        <a>
          <CardWritingsItem>
            <CardWritingsItem.Header>
              <CardWritingsItem.ImageWrapper>
                <Image 
                  width="350" 
                  height="180"
                  objectFit={'cover'} 
                  src={urlFor(image.source).width(500).url()}
                  {...( image.alt && { alt: image.alt })} />
              </CardWritingsItem.ImageWrapper>
              <CardWritingsItem.TextSmall>
                <Date dateString={date} formatString={'dd. MMMM yyyy'}/>
              </CardWritingsItem.TextSmall>
              <Text>{title}</Text>
            </CardWritingsItem.Header>
            <ShortText>{shortText}</ShortText>
            <LongText>{longText}</LongText>
          </CardWritingsItem>
        </a>
      </Link>
    </r-cell>
  )
}