import CVHeader from "./CVHeader";
import Date from '../date'
import Text from '../1_atoms/Text'
import Link from 'next/link'
import styled from 'styled-components'
import { media } from '../../pages/_app'
import { useMediaQuery } from '../viewport';

const CVItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${media.lessThan('small')`
    flex-direction: column;
    margin-bottom: calc(var(--unit)*2);

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

CVItem.Column = styled.div`
  margin-right: var(--columnGap);

  ${media.lessThan('small')`
    margin-right: 0;
  `}
`

const CVText = styled(Text)`
  color: rgba(var(--colorTextRGB), 0.8);
  line-height: calc(var(--unit)*4);
  font-weight: 400;
`;

const CVTextLink = styled(CVText)`
  color: var(--colorText);
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
  }
`;


export default function CVSection({content}){
  const isSmallBreakpoint = useMediaQuery(640); // mediaSizes.small * 16 (base font size)

  return(
    <>
      <r-cell class="cv-section header" span="2" span-m="row">
        <CVHeader title={content.title}/>
      </r-cell>
      <r-cell class="cv-section" span="4" span-m="6">
      {content.data.map((item, index) => (
        <CVItem key={index}>
          {isSmallBreakpoint ? (
            <CVItem.Column>
              <CVText as="span"><Date dateString={item.startDate} formatString={'MMM, yy'}></Date></CVText > – <CVText as="span"><Date dateString={item.endDate} formatString={'MMM, yy'}></Date></CVText><br/>
            </CVItem.Column>
          ) : (
            <CVItem.Column>
              <CVText as="span"><Date dateString={item.startDate} formatString={'MMM, yyyy'}></Date></CVText > – <CVText as="span"><Date dateString={item.endDate} formatString={'MMM, yyyy'}></Date></CVText><br/>
            </CVItem.Column>
          )}
          <CVText key={index}>
            {item.title}, {item.placeLink ? <Link href={item.placeLink} passHref><a><CVTextLink as="span">{item.place}</CVTextLink></a></Link> : item.place}, {item.location}
          </CVText>
        </CVItem>
      ))}
      </r-cell>
    </>
  )
}