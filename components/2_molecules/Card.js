import Link from 'next/link'
import Image from 'next/image'
import Text from '../1_atoms/Text'
import styled from 'styled-components';
import Date from '../date';

export const CardItem = styled.div`
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

CardItem.Image = styled.div`
  margin-bottom: calc(var(--unit)* 1.75);
`

export default function Card ({image, title, link, text, year, date}) {
  return (
    <CardItem>
      {image ? 
        <CardItem.Image>
          <Image src="https://images.unsplash.com/photo-1602851519564-ab7b91239f1b" width="350" height="150" objectFit="cover" ></Image>
        </CardItem.Image> : ''}
      <CardItem.Header>
        <Link href={link} passHref>
          <a>
            <Text>{title}</Text>
          </a>
        </Link>
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
  )
}
