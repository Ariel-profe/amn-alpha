"use client";

import {Companies} from "@/components/homepage/companies";
import Features from "@/components/homepage/features";
import {WeBuild} from "@/components/homepage/we-build/page";
import {WeCreate} from "@/components/homepage/we-create/page";
import Services from "@/components/homepage/services";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ShuffleHero from "@/components/homepage/shuffling-hero";

export default function Home() {    
  return( 
  <TracingBeam>
    <ShuffleHero />
    <Features />
    <Services />
    <WeCreate />
    <Companies />
    <WeBuild />
  </TracingBeam>)
}
