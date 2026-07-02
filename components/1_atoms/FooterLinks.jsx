import React from 'react'
import FooterLink from './FooterLink.jsx'

export default function FooterLinks({links}) {
  return (
    <nav>
      <ul className="flex list-none">
        { links && 
          links.map(({text, link}, index) => ( 
            <li className="flex" key={index}>
              <FooterLink {...{text, link}}/>
              {index !== links.length -1 && 
                <p className="font-mono text-xs text-textDark mb-0 normal-case tracking-normal">
                  &nbsp;/&nbsp;
                </p>
              }
            </li>
          ))
        }
      </ul>
    </nav>
  )
}