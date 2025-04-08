import React from 'react'
import Link from 'next/link'

export default function FooterLink({text, link, light}){
  if (!text || !link) return null;
  
  const textClasses = "font-mono text-xs mb-0 normal-case tracking-normal";
  
  return (
    <>
      {light ? (
        <Link 
          href={link} 
          className="hover:text-text hover:underline hover:cursor-pointer"
        >
          <p className={`${textClasses} text-text`}>{text}</p>
        </Link>
      ) : (
        <Link 
          href={link} 
          className="hover:text-text hover:underline hover:cursor-pointer group"
        >
          <p className={`${textClasses} text-textDark`}>
            <span className="group-hover:text-text">{text}</span>
          </p>
        </Link>
      )}
    </>
  )
}