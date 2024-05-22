import { cn } from "@/lib/utils";

export const Title = ({title, className}:{title:string; className?:string;}) => {
  return (
    <div className={cn("bg-gradient-to-r from-rose-500 to-amn-semilight bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10", 
    className
    )}>
        {title}
    </div>
  )
}
