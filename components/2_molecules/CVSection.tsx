import React from 'react'
import CVHeader from "./CVHeader"
import Date from '../0_helpers/date'
import Text from '../1_atoms/Text'
import { useMediaQuery } from '../0_helpers/viewport'
import { CVItem } from '../../types/index'

interface CVSectionProps {
  content: {
    title: string;
    data?: CVItem[];
  };
}

export default function CVSection({ content }: CVSectionProps) {
  const isSmallBreakpoint = useMediaQuery(640) // mediaSizes.small * 16 (base font size)

  // We'll use createElement for the custom elements
  return(
    <>
      {React.createElement(
        'r-cell', 
        { 
          className: "cv-section header", 
          span: "2", 
          'span-m': "row" 
        },
        <CVHeader title={content.title}/>
      )}
      
      {React.createElement(
        'r-cell',
        {
          className: "cv-section",
          span: "4",
          'span-m': "6"
        },
        content.data?.map((item: CVItem, index: number) => (
          <div 
            key={index}
            className="
              flex flex-row justify-start
              sm:flex-col sm:mb-[calc(8px*2)]
              sm:last:mb-0
            "
          >
            {isSmallBreakpoint ? (
              <div className="mr-0">
                <Text.Small.Dark as="span">
                  <Date dateString={item.startDate} formatString={'MMM, yy'}></Date>
                </Text.Small.Dark>
                <Text.Small.Dark as="span"> – </Text.Small.Dark>
                { item.ongoing ? (
                  <>
                    <Text.Small.Dark as="span">
                      {'Ongoing'}
                    </Text.Small.Dark><br/>
                  </>
                ) : (
                  item.endDate ? (
                    <>
                      <Text.Small.Dark as="span">
                        <Date dateString={item.endDate} formatString={'MMM, yyyy'}></Date>
                      </Text.Small.Dark><br/>
                    </>
                  ) : null
                ) }
              </div>
            ) : (
              <div className="mr-[var(--columnGap)] min-w-[150px] sm:mr-0">
                <Text.Small.Dark as="span">
                  <Date dateString={item.startDate} formatString={'MMM, yyyy'}></Date>
                </Text.Small.Dark>
                <Text.Small.Dark as="span"> – </Text.Small.Dark>
                { item.ongoing ? (
                  <>
                    <Text.Small.Dark as="span">
                      {'Ongoing'}
                    </Text.Small.Dark><br/>
                  </>
                ) : (
                  item.endDate ? (
                    <>
                      <Text.Small.Dark as="span">
                        <Date dateString={item.endDate} formatString={'MMM, yyyy'}></Date>
                      </Text.Small.Dark><br/>
                    </>
                  ) : null
                ) }
              </div>
            )}
            <Text 
              key={index} 
              as="span"
              className="
                leading-[calc(8px*4)]
                sm:leading-[calc(8px*3)]
              "
            >
              {item.title}, {item.placeLink ? (
                <a href={item.placeLink} className="text-text underline cursor-pointer inline">
                  {item.place}
                </a>
              ) : item.place}, {item.location}
              <Text 
                as="div"
                className="
                font-normal 
                leading-[calc(8px*3.75)] 
                mt-[calc(8px*1.25)] 
                mb-[calc(8px*2.75)]
                sm:leading-[calc(8px*3.25)]
                sm:text-sm
              ">{item.text}</Text>
            </Text>
         
          </div>
        ))
      )}
    </>
  )
}