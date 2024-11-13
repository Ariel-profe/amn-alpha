
import { CardHoverEffectDemo } from '@/components/ui/card-hover';
import { aboutGoals } from '@/utils/constants';

const Goals = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 lg:my-20" id="objetivos">
      <CardHoverEffectDemo cardsArray={aboutGoals} />
    </div>
  )
}

export default Goals