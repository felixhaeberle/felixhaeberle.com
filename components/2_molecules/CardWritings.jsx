import React from 'react'
import Card from './Card.jsx'

export default function CardWritings({title, text, date, image, imageAlt, link, id}) {
  return (
    <Card 
      title={title}
      text={text}
      date={date}
      image={image}
      imageAlt={imageAlt}
      link={link}
    />
  )
}