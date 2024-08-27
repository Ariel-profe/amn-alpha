import './globals.css'
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Navbar from '@/components/ui/navbar/page';
import { Footer } from '@/components/ui/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { FloatingNavDemo } from '@/components/ui/navbar/floating-navbar';

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMN Consultora Informatica',
  description: 'Sitio web de AMN Consultora Informatica',
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='dark'>
      <link rel="icon" href="/iso1.svg" sizes="any" />
      <body className={`${font.className} bg-slate-100 dark:bg-gray-900 overflow-y-scroll overflow-x-hidden max-w-[1990px] mx-auto px-3`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex flex-col'>
              <Navbar />
              <FloatingNavDemo />
              <main className='flex-grow border-b-2  pb-10'>
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
      </body>
    </html>
  )
}
