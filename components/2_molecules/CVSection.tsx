import React from 'react'
import CVHeader from "./CVHeader"
import Date from '../0_helpers/date'
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

  return(
    <div className="
      flex flex-col lg:flex-row
      gap-x-8 md:gap-x-12 lg:gap-x-16
      gap-y-8 md:gap-y-10
      mt-12 md:mt-16 lg:mt-20 first:mt-0
    ">
      <div className="lg:w-1/3">
        <CVHeader title={content.title}/>
      </div>
      <div className="lg:w-2/3">
        {content.data?.map((item: CVItem, index: number) => (
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
                <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark">
                  <Date dateString={item.startDate} formatString={'MMM, yy'}></Date>
                </span>
                <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark"> – </span>
                { item.ongoing ? (
                  <>
                    <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark">
                      {'Ongoing'}
                    </span><br/>
                  </>
                ) : (
                  item.endDate ? (
                    <>
                      <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark">
                        <Date dateString={item.endDate} formatString={'MMM, yyyy'}></Date>
                      </span><br/>
                    </>
                  ) : null
                ) }
              </div>
            ) : (
              <div className="mr-8 md:mr-12 lg:mr-16 min-w-[150px] sm:mr-0">
                <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark">
                  <Date dateString={item.startDate} formatString={'MMM, yyyy'}></Date>
                </span>
                <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark"> – </span>
                { item.ongoing ? (
                  <>
                    <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark">
                      {'Ongoing'}
                    </span><br/>
                  </>
                ) : (
                  item.endDate ? (
                    <>
                      <span className="font-sans text-sm text-text leading-small-text font-medium text-textDark">
                        <Date dateString={item.endDate} formatString={'MMM, yyyy'}></Date>
                      </span><br/>
                    </>
                  ) : null
                ) }
              </div>
            )}
            <span
              key={index}
              className="
                font-sans text-base text-text font-medium
                leading-[calc(8px*4)]
                sm:leading-[calc(8px*3)]
              "
            >
              {item.title}, {item.placeLink ? (
                <a href={item.placeLink} className="text-text underline cursor-pointer inline">
                  {item.place}
                </a>
              ) : item.place}, {item.location}
              <div
                className="
                font-sans text-base text-text font-normal
                leading-[calc(8px*3.75)] 
                mt-[calc(8px*1.25)] 
                mb-[calc(8px*2.75)]
                sm:leading-[calc(8px*3.25)]
                sm:text-sm
              ">{item.text}</div>
            </span>
         
          </div>
        ))}
      </div>
    </div>
  )
}