import React from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const metaDescription =
  'Picobello is the missing AI layer for hospitality. It takes over the repetitive work behind hotel operations and guest communication.'

const belRivaMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Seehotel+BelRiva+Hagnau+am+Bodensee'

const chapters = [
  {
    marker: '01',
    title: 'Growing up in a hotel',
    body: [
      'I grew up in ',
      { href: belRivaMapsUrl, label: 'my parents’ hotel' },
      ', right on the shore of Lake Constance, with the Swiss Alps across the water. As a kid I played ball between the sunbathing guests on our lawn by the lake. Later I helped wherever hands were needed, washing dishes, fixing things around the house, looking after guests. A well-run hotel looks effortless from the outside. From the inside I saw the daily, precise work behind it, and the discipline it takes to care about details that nobody will ever mention.',
    ],
  },
  {
    marker: '02',
    title: 'Design & technology as a backbone',
    body: [
      'I went on to study interaction design at HfG Schwäbisch Gmünd and spent more than ten years building digital products in startups, most recently as a senior design engineer at ',
      { href: 'https://inlang.com', label: 'inlang' },
      ' in Berlin, and before that as co-founder of ',
      { href: 'https://getstage.app', label: 'Stage' },
      '. The lesson stayed the same. Good products, like good hotels, come from many small decisions made with care.',
    ],
  },
  {
    marker: '03',
    title: 'On a mission to solve AI for hospitality',
    body: [
      'Now I’m bringing both together. With Picobello I’m building the missing AI layer for hospitality. It takes over the repetitive work behind hotel operations and guest communication, so teams have time for their guests again. You can find us at ',
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
      <main className="flex-grow flex items-center justify-center px-unit-4 py-unit-16">
        <div className="w-full max-w-[56rem] grid grid-cols-[minmax(0,2fr)_minmax(0,4fr)] md:grid-cols-1 gap-x-unit-16 gap-y-unit-10 items-start">
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
              </p>
            </div>
          </aside>
          <div className="flex flex-col gap-y-unit-10 max-w-[36rem]">
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
      <footer className="flex justify-center gap-x-unit-4 px-unit-4 py-unit-8">
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
