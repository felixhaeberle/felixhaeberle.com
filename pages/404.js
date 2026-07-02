import Head from 'next/head'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404: This page could not be found</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex items-center justify-center font-sans">
        <div className="flex items-center gap-6">
          <h1 className="text-[24px] font-medium leading-none">404</h1>
          <div className="h-12 w-px bg-white/30" />
          <p className="text-[14px] font-normal leading-none">This page could not be found.</p>
        </div>
      </main>
    </>
  )
}
