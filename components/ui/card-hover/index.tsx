import { HoverEffect } from "@/components/ui/card-hover/card-hover-effect";

export function CardHoverEffectDemo({cardsArray} : {cardsArray: {icon: any, title: string, description: string}[]}) {
  return (
    <div className="flex items-center justify-center px-3 lg:px-10">
      <HoverEffect items={cardsArray} />
    </div>
  );
}
