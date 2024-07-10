import { cn } from "@/lib/utils";

export const Title = ({title, className}:{title:string; className?:string;}) => {
  return (
    <h1 className={cn("bg-gradient-to-b from-rose-500 to-amn-semilight bg-clip-text text-transparent text-4xl lg:text-6xl font-bold my-5 lg:my-10 py-2", 
    className
    )}>
      {title}
    </h1>
  )
}
