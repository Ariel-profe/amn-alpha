
import { BentoDemo } from '@/components/tecnologies/bento-grid';
import { Collaborations } from '@/components/tecnologies/collaborations';
import { DragCards } from '@/components/tecnologies/drag-cards';
import GraphicDesign from '@/components/tecnologies/graphic-design';
import { HeroSection } from '@/components/ui/hero-section';

const TecnologiesPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative">
      <HeroSection title="Las tecnologías que aplicamos son las últimas del mercado y poseen" subtitle="excelente rendimiento a la hora de utilizarlas" />
      <BentoDemo />
      <DragCards />
      <Collaborations />
      <GraphicDesign />
    </section>
  )
}

export default TecnologiesPage