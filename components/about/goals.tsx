
import { CardHoverEffectDemo } from '@/components/ui/card-hover';
import { aboutGoals } from '@/utils/constants';
import { Subtitle } from '@/components/ui/subtitle';

const Goals = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="objetivos">
      <Subtitle subtitle="Lo que nos motiva a ayudarte" />
      <CardHoverEffectDemo cardsArray={aboutGoals} />
    </div>
  )
}

export default Goals