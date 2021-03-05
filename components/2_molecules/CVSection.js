import CVHeader from "./CVHeader";
import Date from '../date'
import Text from '../1_atoms/Text'
import Link from 'next/link'
import styled from 'styled-components'

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
  return(
    <>
      <r-cell span="2" span-s="1" span-xs="4">
        <CVHeader title={content.title}/>
      </r-cell>
      
        <>
          <r-cell span="1" span-s="1" span-xs="2">
            {content.data.map((item) => (
              <>
              <CVText as="span"><Date dateString={item.startDate} formatString={'MMM, yyyy'}></Date></CVText > – <CVText as="span"><Date dateString={item.endDate} formatString={'MMM, yyyy'}></Date></CVText><br/>
              </>
            ))}
          </r-cell>
          <r-cell span="3" span-s="2" span-xs="2"> 
            {content.data.map((item) => (
              <CVText>
                {item.title}, {item.placeLink ? <Link href={item.placeLink} passHref><a><CVTextLink as="span">{item.place}</CVTextLink></a></Link> : item.place}, {item.location}
              </CVText>
            ))}
          </r-cell>
        </>
      
    </>
  )
}