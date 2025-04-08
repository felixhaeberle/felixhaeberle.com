import React from 'react'
import ActiveLink from '../1_atoms/ActiveLink.jsx'
import Text from '../1_atoms/Text.jsx'
import Link from 'next/link'

export default function Navigation({ navigationItems, title }) {
  return (
    <div className="
      flex flex-row justify-between w-full 
      [&_p:hover]:cursor-pointer
    ">
      <div>
        <Link href="/" className="block">
          <Text>{title}</Text>
        </Link>
      </div>
      <nav>
        <ul className="
          flex flex-row list-none
          md:flex-col md:justify-end md:mb-unit-3
          md:last:mb-0
        ">
        {navigationItems.map(({ url, title }) => (
          <li 
            className="
              ml-unit-8 
              hover:cursor-pointer
              md:ml-0 md:py-unit
              md:first:-mt-unit
              md:last:-mb-unit
            " 
            key={title}
          >
            <ActiveLink href={url}>
              <div className="block">
                <Text>{title}</Text>
              </div>
            </ActiveLink>
          </li>
        ))}
        </ul>
      </nav>
    </div>
  )
}