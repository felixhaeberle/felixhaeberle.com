import React from 'react'

export default function Principle({ card, index }){
  card.card_text = card.card_text.includes('<br') ? card.card_text : card.card_text.split(",").join(",<br />")
  
  return (
    <div className="flex flex-col items-start mt-[calc(var(--unit)*10)] sm:mt-[calc(var(--unit)*5)]">
      <div className="flex flex-row items-center mb-[calc(var(--unit)*4.375)]">
        <span className="
          flex items-center justify-center
          w-[calc(var(--unit)*6.25)] h-[calc(var(--unit)*6.25)]
          bg-buttonBg 
          border border-textDark/20
        ">
          <span className="flex items-center justify-center w-full h-full">
            <span className="font-mono text-lg text-text font-medium tracking-custom uppercase text-textDark m-0 p-0 leading-none text-center">
              {index}
            </span>
          </span>
        </span>
        <div className="ml-[calc(var(--unit)*2.5)] flex items-center">
          <span className="font-mono text-lg text-text font-medium tracking-custom uppercase text-textDark m-0 p-0 leading-none">
            {card.card_header_text}
          </span>
        </div>
      </div>
      <p className="font-sans text-base text-text font-medium mb-[calc(var(--unit)*1.875)]" dangerouslySetInnerHTML={{__html: card.card_text}}></p>
      <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">{card.card_description}</p>
    </div>
  )
}
