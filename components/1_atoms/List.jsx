import React from 'react'

const List = ({ children, className = '', responsiveColumnView = false, ...props }) => {
  return (
    <ul className={`
      list-none
      ${responsiveColumnView ? 'flex flex-col md:flex-row md:flex-wrap' : ''}
      ${className}
    `} {...props}>
      {children}
    </ul>
  )
}

List.Item = ({ children, className = '', responsiveColumnView = false, ...props }) => {
  return (
    <li className={`
      ${responsiveColumnView ? 'md:basis-1/2' : ''}
      ${className}
    `} {...props}>
      {children}
    </li>
  )
}

export default List