import { cn } from "@/lib/utils";

export const Subtitle = ({subtitle, className}:{subtitle:string; className?:string;}) => {
  return (
    <h2 className={cn(`text-4xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-amn-light bg-opacity-50 py-2 my-5 lg:my-10 text-center`,
      className
    )}>
      {subtitle}
    </h2>
  )
}
