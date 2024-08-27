
import { Subtitle } from '@/components/ui/subtitle';
import { CardHoverEffectDemo } from '@/components/ui/card-hover';
import { homepageServices } from '@/utils/constants';

const Services = async() => {

  return (
    <div className="flex flex-col items-center justify-center " id="servicios">
      <Subtitle subtitle="Lo que podemos ofrecerte" />
      <CardHoverEffectDemo cardsArray={homepageServices} />
    </div>
  )
}

export default Services