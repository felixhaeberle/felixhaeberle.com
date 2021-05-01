import CVHeader from "./CVHeader";
import Date from '../0_helpers/date'
import Link from 'next/link'
import Text from '../1_atoms/Text'
import media from '../0_helpers/viewportValues'
import styled from 'styled-components'
import { useMediaQuery } from '../0_helpers/viewport';

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
  min-width: 150px;

  ${media.lessThan('small')`
    margin-right: 0;
  `}
`

const CVText = styled(Text)`
  color: rgba(var(--colorTextRGB), 0.8);
  line-height: calc(var(--unit)*4);
`;

CVText.Dark = styled(Text.Small.Dark)`
  line-height: calc(var(--unit)*4);
`;

CVText.Light = styled(Text)`
  font-weight: 400;
  line-height: calc(var(--unit)*3.75);
  margin-top: calc(var(--unit)*1.25);
  margin-bottom: calc(var(--unit)*2.75);
`;

const CVTextLink = styled(CVText)`
  color: var(--colorText);
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
  }
`;


export default function CVSection({ content }){
  const isSmallBreakpoint = useMediaQuery(640); // mediaSizes.small * 16 (base font size)

  return(
    <>
      <r-cell class="cv-section header" span="2" span-m="row">
        <CVHeader title={content.title}/>
      </r-cell>
      <r-cell class="cv-section" span="4" span-m="6">
      {content.data?.map((item, index) => (
        <CVItem key={index}>
          {isSmallBreakpoint ? (
            <CVItem.Column>
              <CVText.Dark as="span">
                <Date dateString={item.startDate} formatString={'MMM, yy'}></Date>
              </CVText.Dark>
              <CVText.Dark as="span"> – </CVText.Dark>
              { item.ongoing ? (
                <>
                  <CVText.Dark as="span">
                    {'Ongoing'}
                  </CVText.Dark><br/>
                </>
              ) : (
                item.endDate ? (
                  <>
                    <CVText.Dark as="span">
                      <Date dateString={item.endDate} formatString={'MMM, yyyy'}></Date>
                    </CVText.Dark><br/>
                  </>
                ) : null
              ) }
            </CVItem.Column>
          ) : (
            <CVItem.Column>
              <CVText.Dark as="span">
                <Date dateString={item.startDate} formatString={'MMM, yyyy'}></Date>
              </CVText.Dark>
              <CVText.Dark as="span"> – </CVText.Dark>
              { item.ongoing ? (
                <>
                  <CVText.Dark as="span">
                    {'Ongoing'}
                  </CVText.Dark><br/>
                </>
              ) : (
                item.endDate ? (
                  <>
                    <CVText.Dark as="span">
                      <Date dateString={item.endDate} formatString={'MMM, yyyy'}></Date>
                    </CVText.Dark><br/>
                  </>
                ) : null
              ) }
            </CVItem.Column>
          )}
          <CVText key={index}>
            {item.title}, {item.placeLink ? 
            <Link href={item.placeLink} passHref>
              <a>
                <CVTextLink as="span">{item.place}</CVTextLink>
              </a>
            </Link> : item.place}, {item.location}
            <CVText.Light>{item.text}</CVText.Light>
          </CVText>
         
        </CVItem>
      ))}
      </r-cell>
    </>
  )
}