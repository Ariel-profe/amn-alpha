"use client";

import { ReactNode, MouseEvent, RefObject, ForwardedRef } from 'react';
import Link, {LinkProps} from "next/link";
import { useRouter } from 'next/navigation';

interface Props extends LinkProps{
    children: ReactNode;
    href: string;
    className?: string;
    ref?: ForwardedRef<HTMLAnchorElement>;
};

function sleep(ms: number):Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({children, href, className = "", ref, ...props}:Props) => {

    const router = useRouter();

    const handleTransition = async(e:MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // TODO: Run exit animation
        const body = document.querySelector("main");
        body?.classList.add("page-transition");

        // Sleep for some time
        await sleep(500);

        router.push(href);

        await sleep(500);
        // Run enter animation
        body?.classList.remove("page-transition");
    };

  return (
    <Link 
        ref={ref}
        href={href} 
        className={className}
        {...props} 
        onClick={handleTransition}
    >
        {children}
    </Link>
  )
}
