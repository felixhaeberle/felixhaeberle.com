import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// ActiveLink: Manages active state of links - used in Navigation
export default function ActiveLink({ children, href }) {
  const router = useRouter()
  const isCurrentPath = router.pathname === href || router.asPath === href

  // For ActiveLink, we need to use a special approach
  // We extract the className from the child and then create a properly styled Link
  const childProps = React.Children.only(children).props
  const className = isCurrentPath ? 
    `${childProps.className || ''} underline` : 
    childProps.className || ''
  
  return (
    <Link 
      href={href}
      className={className}
    >
      {childProps.children}
    </Link>
  )
}