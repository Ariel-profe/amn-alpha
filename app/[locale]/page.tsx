import {Companies} from "@/components/homepage/companies";
import Features from "@/components/homepage/features";
import {WeBuild} from "@/components/homepage/we-build/page";
import {WeCreate} from "@/components/homepage/we-create/page";
import Hero from "@/components/homepage/hero";
import {Plans} from "@/components/homepage/plans/page";
import Services from "@/components/homepage/services";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default async function Home({ params: locale }:{ params: {locale :string} }) {    
  return <TracingBeam className="px-3 lg:px-10">
    <Hero locale={locale.locale} />
    <Features locale={locale.locale} />
    <Companies />
    <Services locale={locale.locale} />
    <WeCreate locale={locale.locale} />
    <Plans />
    <WeBuild locale={locale.locale} />
    </TracingBeam>;
}
