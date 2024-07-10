
import { BentoDemo } from '@/components/tecnologies/bento-grid';
import { Collaborations } from '@/components/tecnologies/collaborations';
import GraphicDesign from '@/components/tecnologies/graphic-design';
import { HeroSection } from '@/components/ui/hero-section';

const TecnologiesPage = () => {
  return (
    <div className="relative px-3 lg:px-10">
      <HeroSection title="Las tecnologias que aplicamos son las ultimas del mercado y poseen" subtitle="excelente rendimiento a la hora de utilizarlas" />
      <BentoDemo />
      <Collaborations />
      <GraphicDesign />
    </div>
  )
}

export default TecnologiesPage