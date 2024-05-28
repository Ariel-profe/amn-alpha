import Company from "@/components/about/company";
import Goals from "@/components/about/goals";
import { History } from "@/components/about/history";
import { GlobeDemo } from "@/components/contact/globe";

const AboutPage = () => {
  return (
    <div className="relative px-3 lg:px-10">
      <History />
      <Company />
      <Goals />
      <GlobeDemo />
    </div>
  )
}

export default AboutPage