
import { BentoDemo } from '@/components/tecnologies/bento-grid';
import { Collaborations } from '@/components/tecnologies/collaborations';
import GraphicDesign from '@/components/tecnologies/graphic-design';
import { HeroSection } from '@/components/ui/hero-section';

const TecnologiesPage = () => {
  return (
    <div>
      <HeroSection title="Las tecnologías que aplicamos son las últimas del mercado y poseen" subtitle="excelente rendimiento a la hora de utilizarlas" />
      <BentoDemo />
      <Collaborations />
      <GraphicDesign />
    </div>
  )
}

export default TecnologiesPage