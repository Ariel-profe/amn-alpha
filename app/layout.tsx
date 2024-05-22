import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from '@/components/ui/navbar/page'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Footer } from '@/components/ui/footer'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMN Consultora Informatica',
  description: 'Sitio web de AMN Consultora Informatica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gradient-to-br from-slate-50/50 to-red-50/50 overflow-y-scroll overflow-x-hidden`}>
      <link rel="icon" href="/iso1.svg" sizes="any" />
      <div className='relative flex flex-col'>
        <Navbar />
         <main className='flex-grow shadow-md pb-20'>
          <TracingBeam>
            {children}
          </TracingBeam>
        </main>
        <Footer />
      </div>
      </body>
    </html>
  )
}
