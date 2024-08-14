"use client";

import { ReactNode, MouseEvent, ForwardedRef } from 'react';
import { motion } from 'framer-motion';
import Link, {LinkProps} from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Props extends LinkProps{
    children: ReactNode;
    href: string;
    className?: string;
    ref?: ForwardedRef<HTMLAnchorElement>;
};

function sleep(ms: number):Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
};


export function Forward() {
    return (
      <div className="absolute bottom-0 left-0 right-0 stroke-amn-dark w-[75%] mx-auto">
        <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            strokeWidth={2}
            d="M 0, 5 L 100, 5"
          />
        </svg>
      </div>
    );
  }

export const TransitionLink = ({children, href, className = "", ref, ...props}:Props) => {

    const router = useRouter();
    const pathname = usePathname();

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
        className={cn("relative", className)}
        {...props} 
        onClick={handleTransition}
    >
        {children}
        {pathname === href && <Forward />}
    </Link>
  )
}
