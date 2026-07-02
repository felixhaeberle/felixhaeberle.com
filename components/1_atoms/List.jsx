import React from 'react'

const List = ({ children, className = '', responsiveColumnView = false, ...props }) => {
  const classes = [
    'list-none',
    responsiveColumnView ? 'flex flex-col md:flex-row md:flex-wrap' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}

List.Item = ({ children, className = '', responsiveColumnView = false, ...props }) => {
  const classes = [
    responsiveColumnView ? 'md:basis-1/2' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  )
}

export default List