import React from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const metaDescription =
  'Picobello is the missing AI layer for hospitality. It takes over the repetitive work behind hotel operations and guest communication.'

const chapters = [
  {
    marker: '01',
    title: 'Running a hotel today',
    body: [
      'It’s 10 pm and the day should be over. But the inbox is full, tomorrow’s shift plan has a hole in it, and a guest just asked if late check-in is possible. Anyone who runs a hotel knows this evening. Costs keep rising, good people are hard to find, and the booking platforms take their cut. I know this evening too. I grew up in a family-run hotel and worked every job in the house.',
    ],
  },
  {
    marker: '02',
    title: 'Design & technology as a backbone',
    body: [
      'Later I spent more than ten years building digital products in startups, from first prototypes to tools people rely on every day. I co-founded a company and helped build open source software used around the world. And I kept noticing the same thing: good products and good hotels are built alike, out of many small decisions made with care.',
    ],
  },
  {
    marker: '03',
    title: 'On a mission to solve AI for hospitality',
    body: [
      'Picobello brings the two together. It’s the missing AI layer for hospitality: it takes over the repetitive work behind hotel operations and guest communication, so the day ends when it should and the time goes back to the guests. You can find us at ',
      { href: 'https://picobello.ai', label: 'picobello.ai' },
      '.',
    ],
  },
]

export default function Picobello() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Felix Häberle — Picobello</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Head>
      <main className="flex-grow flex items-center justify-center px-unit-4 py-unit-4">
        <div className="w-full max-w-[56rem] grid grid-cols-[minmax(0,2fr)_minmax(0,4fr)] md:grid-cols-1 gap-x-unit-10 gap-y-unit-8 items-start">
          <aside className="flex flex-col gap-y-unit-3">
            <Image
              src="/images/profile.png"
              className="rounded-full border border-textDark/20 w-24 h-24 object-cover"
              width={1364}
              height={1310}
              alt="Felix Häberle"
            />
            <div className="flex flex-col gap-y-unit">
              <h1 className="font-sans text-lg text-textLight font-medium">
                Felix Häberle
              </h1>
              <p className="font-sans text-base text-textDark leading-small-text">
                Founder of Picobello.
                <br />
                AI agents for hospitality.
              </p>
            </div>
          </aside>
          <div className="flex flex-col gap-y-unit-4.5 max-w-[36rem]">
            {chapters.map((chapter) => (
              <section key={chapter.marker} className="flex flex-col gap-y-unit-1.5">
                <p className="font-mono text-xs text-textDarker font-medium">
                  {chapter.marker}
                </p>
                <h2 className="font-sans text-lg text-textLight font-medium">
                  {chapter.title}
                </h2>
                <p className="font-sans text-base text-text leading-small-text tracking-custom">
                  {chapter.body.map((segment, index) =>
                    typeof segment === 'string' ? (
                      segment
                    ) : (
                      <Link
                        href={segment.href}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textLight font-medium underline underline-offset-4 decoration-textDarker"
                      >
                        {segment.label}
                      </Link>
                    )
                  )}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <footer className="flex justify-center gap-x-unit-4 px-unit-4 py-unit-4">
        <Link
          href="/"
          className="font-mono text-xs text-textDarker font-medium"
        >
          felixhaeberle.com
        </Link>
        <Link
          href="/legal/impressum"
          className="font-mono text-xs text-textDarker font-medium"
        >
          Imprint
        </Link>
      </footer>
    </div>
  )
}
