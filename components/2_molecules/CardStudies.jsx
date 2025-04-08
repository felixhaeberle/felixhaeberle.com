import React from 'react'
import Card from './Card.jsx'

export default function CardStudies({title, text, year, image, imageAlt, link, id}) {
  return (
    <Card 
      title={title}
      text={text}
      year={year}
      image={image}
      imageAlt={imageAlt}
      link={link}
      isStudy={true}
    />
  )
}