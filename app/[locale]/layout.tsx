import './globals.css'
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { dir } from 'i18next';
import Navbar from '@/components/ui/navbar/page';
import { Footer } from '@/components/ui/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { i18nConfig } from '@/i18nConfig';
import TranslationsProvider from '@/components/translations-provider';
import initTranslations from '../i18n';

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMN Consultora Informatica',
  description: 'Sitio web de AMN Consultora Informatica',
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = ["homepage", "common"]

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string}
}) {

  const {resources} = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)} className='dark'>
      <link rel="icon" href="/iso1.svg" sizes="any" />
      <body className={`${font.className} bg-slate-50 dark:bg-gray-900 overflow-y-scroll overflow-x-hidden`}>
        <TranslationsProvider 
          locale={locale} 
          namespaces={i18nNamespaces} 
          resources={resources}
        >
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
        </TranslationsProvider>
      </body>
    </html>
  )
}
