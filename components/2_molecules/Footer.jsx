import React from 'react'
import FooterLinks from '../1_atoms/FooterLinks.jsx'
import { format } from 'date-fns'

export default function Footer({ settings }) {
  let currentYear = format(new Date(), "yyyy");
  
  // Ensure settings and its properties exist
  const socialLinks = settings?.social_links || [];
  const legalLinks = settings?.legal_links || [];
  const title = settings?.title || 'Felix Häberle';
  
  // Simplified footer without client-side load time calculation
  return (
    <footer className="flex flex-col md:flex-row justify-between w-full mt-16 py-3 border-t border-textDark">
      <div className="mb-2">
        <FooterLinks links={socialLinks.slice(0, 3)} />
      </div>
      
      <div className="mb-2">
        <p className="font-mono text-xs text-textDark mb-0 normal-case tracking-normal">
          {`${currentYear} © ${title}`}
        </p>
      </div>
      
      <div className="mb-2">
        <FooterLinks links={legalLinks} />
      </div>
    </footer>
  )
}