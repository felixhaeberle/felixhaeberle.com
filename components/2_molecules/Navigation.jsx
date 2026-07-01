import React from 'react'
import ActiveLink from '../1_atoms/ActiveLink.jsx'
import Link from 'next/link'

export default function Navigation({ navigationItems, title }) {
  return (
    <div className="
      flex flex-col lg:flex-row lg:items-center lg:justify-between w-full
      gap-y-3 md:gap-y-4
      [&_p:hover]:cursor-pointer
    ">
      <div>
        <Link href="/" className="block">
          <p className="font-sans text-base text-text font-medium">{title}</p>
        </Link>
      </div>
      <nav className="w-full lg:w-auto">
        <ul className="
          flex flex-row flex-wrap list-none
          items-center justify-start lg:justify-end
          gap-x-5 gap-y-2 lg:gap-y-0 lg:gap-x-8 xl:gap-x-12
        ">
        {navigationItems.map(({ url, title }) => (
          <li 
            className="
              shrink-0 hover:cursor-pointer
            " 
            key={title}
          >
            <ActiveLink href={url}>
              <div className="block">
                <p className="font-sans text-base text-text font-medium">{title}</p>
              </div>
            </ActiveLink>
          </li>
        ))}
        </ul>
      </nav>
    </div>
  )
}
