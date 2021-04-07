import { CardItem } from '../2_molecules/Card'
import Date from '../0_helpers/date'
import Link from 'next/link'
import Text from '../1_atoms/Text'
import styled from 'styled-components'

const CardWritingsItem = styled(CardItem)`
  margin-top: calc(var(--unit)*7.5);
`;

CardWritingsItem.Text = styled(Text)``;
CardWritingsItem.TextSmall = styled(CardItem.TextSmall)``;

CardWritingsItem.Header = styled(CardItem.Header)`
  display: flex;
  flex-direction: column;

  ${CardWritingsItem.TextSmall} {
    margin-bottom: calc(var(--unit)*2);
  }

  ${CardWritingsItem.Text} {
    margin-bottom: calc(var(--unit)*1.25);
  }
`


export default function CardWritings({title, link, shortText, longText, date}) {
  return (
    <> 
      <r-cell span="4">
        <CardWritingsItem>
          <CardWritingsItem.Header>
            <CardWritingsItem.TextSmall>
              <Date dateString={date} formatString={'dd. MMMM yyyy'}/>
            </CardWritingsItem.TextSmall>
            <Link href={link}>
              <a>
                <Text>{title}</Text>
              </a>
            </Link>
          </CardWritingsItem.Header>
          <CardWritingsItem.TextSmallDark>{shortText}</CardWritingsItem.TextSmallDark>
          <CardWritingsItem.TextSmallDark>{longText}</CardWritingsItem.TextSmallDark>
        </CardWritingsItem>
      </r-cell>
    </>
  )
}