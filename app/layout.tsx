import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from '@/components/ui/navbar/page'
import { Footer } from '@/components/ui/footer'
import { ThemeProvider } from '@/components/theme-provider'

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
    <html lang="en" className='dark'>
      <link rel="icon" href="/iso1.svg" sizes="any" />
      <body className={`${font.className} bg-slate-50 dark:bg-slate-900 overflow-y-scroll overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <div className='relative flex flex-col'>
          <Navbar />
           <main className='flex-grow shadow-md pb-20'>
              {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
