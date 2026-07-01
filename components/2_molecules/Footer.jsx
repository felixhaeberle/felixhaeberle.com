import React, { useEffect, useState } from 'react'
import FooterLinks from '../1_atoms/FooterLinks.jsx'

export default function Footer({ settings }) {
  const [berlinTime, setBerlinTime] = useState(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    const tick = () => setBerlinTime(formatter.format(new Date()))

    tick()
    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [])
  
  // Ensure settings and its properties exist
  const socialLinks = settings?.social_links || [];
  const legalLinks = settings?.legal_links || [];
  const title = settings?.title || 'Felix Häberle';
  
  // Simplified footer without client-side load time calculation
  return (
    <footer className="flex flex-row flex-wrap items-center justify-between w-full mt-16 py-3 border-t border-textDark gap-y-2">
      <div>
        <FooterLinks links={socialLinks.slice(0, 3)} />
      </div>
      <div>
        <p className="font-mono text-xs text-textDark mb-0 normal-case tracking-normal">
          {berlinTime ? `Berlin ${berlinTime} · ` : ''}{`${currentYear} © ${title}`}
        </p>
      </div>
      <div>
        <FooterLinks links={legalLinks} />
      </div>
    </footer>
  )
}
