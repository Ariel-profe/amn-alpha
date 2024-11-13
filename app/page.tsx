"use client";

import {Companies} from "@/components/homepage/companies";
import Features from "@/components/homepage/features";
import {WeCreate} from "@/components/homepage/we-create/page";
import Services from "@/components/homepage/services";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Hero } from "@/components/homepage/hero";

export default function Home() {    
  return( 
  <TracingBeam className="relative mx-auto">
    <Hero />
    <Services />
    <WeCreate />
    <Features />
    <Companies />
  </TracingBeam>)
}
