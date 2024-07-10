'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { i18nConfig } from '@/i18nConfig';

export default function LanguageChanger() {

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();  

  const handleClick = (lang:string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${lang};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + lang + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${lang}`)
      );
    }
    router.refresh();
  };  

  return (
  <div className='flex items-center w-full gap-x-1'>
    <button onClick={() => handleClick('es')} className='w-8 h-8'>
      <img src="/images/spain.svg" alt="bandera-espania" className='w-full lg:hover:opacity-70 transition' />
    </button>
    <button onClick={() => handleClick('en')} className='w-8 h-8'>
      <img src="/images/usa.svg" alt="bandera-usa" className='w-full lg:hover:opacity-70 transition' />
    </button>
  </div>
  );
};
