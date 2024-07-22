import {Companies} from "@/components/homepage/companies";
import Features from "@/components/homepage/features";
import {WeBuild} from "@/components/homepage/we-build/page";
import {WeCreate} from "@/components/homepage/we-create/page";
import Hero from "@/components/homepage/hero";
import {Plans} from "@/components/homepage/plans/page";
import Services from "@/components/homepage/services";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default async function Home({ params: locale }:{ params: {locale :string} }) {    
  return <TracingBeam>
    <div className="max-w-[1640px] mx-auto">
      <Hero locale={locale.locale} />
      <Features locale={locale.locale} />
      <Services locale={locale.locale} />
      <WeCreate locale={locale.locale} />
      <Plans />
      <Companies />
      <WeBuild locale={locale.locale} />
    </div>
    </TracingBeam>;
}
