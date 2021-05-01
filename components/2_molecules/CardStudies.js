import { CardItem } from '../2_molecules/Card'
import Date from '../0_helpers/date'
import ExternalLink from '../1_atoms/ExternalLink'
import Image from 'next/image'
import Link from 'next/link'
import Text from '../1_atoms/Text'
import styled from 'styled-components'
import { urlFor } from '../../lib/sanity'

const CardStudiesItem = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--colorTextDark);
  padding-top: calc(var(--unit)*3.125);
`

CardStudiesItem.Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: calc(var(--unit)* 1.25);
`

CardStudiesItem.Year = styled(CardItem.Date)``

CardStudiesItem.TextSmallDark = styled(Text.Small.Dark)`
  max-width: 80%;
  padding-bottom: calc(var(--unit)*3.125);
`

export default function CardStudies({title, text, date, link, image, imageAlt, index}){

  return(
    <> 
      <r-cell span="4" span-s="1" order-s={index}>
        <Link href={link}>
          <a>
            <CardStudiesItem>
              <CardStudiesItem.Header>

                  <Text>{title}</Text>
                <CardStudiesItem.Year>
                  <Date dateString={date} formatString={'yyyy'} />
                </CardStudiesItem.Year>
              </CardStudiesItem.Header>
              <CardStudiesItem.TextSmallDark>{text}</CardStudiesItem.TextSmallDark>
              <ExternalLink title={'external link'} link={link}/>
            </CardStudiesItem>
          </a>
        </Link>
      </r-cell>
      <r-cell span="6" span-s="1" order-s={index -1}>
        <Link href={link}>
          <a>
            <Image
              {...( imageAlt && { alt: imageAlt })} 
              height="450"
              width="900"
              objectFit="cover"
              src={urlFor(image).width(900).url()} />
            </a>
        </Link>
      </r-cell>
    </>
  )
}