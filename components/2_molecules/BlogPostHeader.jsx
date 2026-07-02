import React from 'react'
import Date from '../0_helpers/date.jsx'

export default function BlogHeader({date, title, categories, className}) {
  return (
    <header className={`
      flex flex-col justify-center items-center
      mt-[calc(var(--unit)*15)] mb-[calc(var(--unit)*11.875)]
      ${className || ''}
    `}>
      <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">
        <Date dateString={date} formatString={'dd. MMMM yyyy'}/>
      </p>
      
      <h1 className="font-sans text-xl text-textLight font-medium text-center w-[80%] mx-auto my-0">
        {title}
      </h1>
      
      <div className="inline-flex flex-row mt-[calc(var(--unit)*5)]">
        {categories.map((category, i, arr) => {
          if (arr.length - 1 === i) {
            return (
              <span key={i} className="font-sans text-base text-text font-medium text-textDark">
                {category.title}
              </span>)
          } else {
            return (
              <span key={i} className="font-sans text-base text-text font-medium text-textDark">
                {category.title + ','}&nbsp;
              </span>)
          }
        })}
      </div>
    </header>
  )
}