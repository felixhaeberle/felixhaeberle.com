import React from 'react'
import Text from '../1_atoms/Text.jsx'

export default function Principle({ card, index }){
  card.card_text = card.card_text.includes('<br') ? card.card_text : card.card_text.split(",").join(",<br />")
  
  return (
    <div className="flex flex-col items-start mt-unit-10 md:mt-unit-5">
      <div className="flex flex-row justify-center items-center mb-[calc(var(--unit)*4.375)]">
        <span className="
          flex justify-center items-center 
          h-[calc(var(--unit)*6.25)] w-[calc(var(--unit)*6.25)] 
          bg-buttonBg 
          p-[calc(var(--unit)*2)_calc(var(--unit)*2.5)] 
          border border-textDark/20
        ">
          <Text.Mono.Dark className="mb-0">
            {index}
          </Text.Mono.Dark>
        </span>
        <Text.Mono.Dark className="ml-[calc(var(--unit)*2.5)] mb-0">
          {card.card_header_text}
        </Text.Mono.Dark>
      </div>
      <Text className="mb-[calc(var(--unit)*1.875)]" dangerouslySetInnerHTML={{__html: card.card_text}}></Text>
      <Text.Small.Dark>{card.card_description}</Text.Small.Dark>
    </div>
  )
}