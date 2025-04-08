import React from 'react'
import Date from '../0_helpers/date.jsx'
import Text from '../1_atoms/Text.jsx'

export default function BlogHeader({date, title, categories, className}) {
  return (
    <header className={`
      flex flex-col justify-center items-center
      mt-[calc(var(--unit)*15)] mb-[calc(var(--unit)*11.875)]
      ${className || ''}
    `}>
      <Text.Mono.Dark>
        <Date dateString={date} formatString={'dd. MMMM yyyy'}/>
      </Text.Mono.Dark>
      
      <Text.Large className="text-center w-[80%] mx-auto my-0">
        {title}
      </Text.Large>
      
      <div className="inline-flex flex-row mt-[calc(var(--unit)*5)]">
        {categories.map((category, i, arr) => {
          if (arr.length - 1 === i) {
            return (
              <Text.Medium.Dark key={i}>
                {category.title}
              </Text.Medium.Dark>)
          } else {
            return (
              <Text.Medium.Dark key={i}>
                {category.title + ','}&nbsp;
              </Text.Medium.Dark>)
          }
        })}
      </div>
    </header>
  )
}