import React from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function UltrahostPage({ content }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
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
                {content.sublineLine1}
                <br />
                {content.sublineLine2}
              </p>
            </div>
          </aside>
          <div className="flex flex-col gap-y-unit-4.5 max-w-[36rem]">
            {content.chapters.map((chapter) => (
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
          {content.imprintLabel}
        </Link>
      </footer>
    </div>
  )
}
