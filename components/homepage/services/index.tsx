
import { CardHoverEffectDemo } from '@/components/ui/card-hover';
import { homepageServices } from '@/utils/constants';

const Services = () => {

  return (
    <div className="flex flex-col items-center justify-center mt-10 lg:mt-20" id="servicios">
      <CardHoverEffectDemo cardsArray={homepageServices} />
    </div>
  )
}

export default Services