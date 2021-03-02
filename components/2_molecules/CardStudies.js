import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import Text from '../1_atoms/Text'
import Date from '../date'
import { CardItem } from '../2_molecules/Card'
import ExternalLink from '../1_atoms/ExternalLink'

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

export default function CardStudies({title, text, date, link, image}){
  return(
    <> 
      <r-cell span="4">
        <CardStudiesItem>
          <CardStudiesItem.Header>
            <Link href={link}>
              <a>
              <Text>{title}</Text>
              </a>
            </Link>
            <CardStudiesItem.Year>
              <Date dateString={date} formatString={'yyyy'} />
            </CardStudiesItem.Year>
          </CardStudiesItem.Header>
          <CardStudiesItem.TextSmallDark>{text}</CardStudiesItem.TextSmallDark>
          <ExternalLink title={'external link'} link={link}/>
        </CardStudiesItem>
      </r-cell>
      <r-cell span="6">
        <Image 
          height="450"
          width="900"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1602851519564-ab7b91239f1b" />
      </r-cell>
    </>
  )
}