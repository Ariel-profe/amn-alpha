import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardSnippet() {
  return (
    <div className="border border-amn-dark/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-amn-dark" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-amn-dark" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-amn-dark" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-amn-dark" />

      <EvervaultCard text="mouse" />

      <h2 className="text-amn-dark  mt-4 text-sm font-light">
        Acerca el mouse y revela un excelente effecto.
      </h2>
    </div>
  );
}