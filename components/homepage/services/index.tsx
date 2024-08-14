
import { Subtitle } from '@/components/ui/subtitle';
import { CardHoverEffectDemo } from '@/components/ui/card-hover';
import { homepageServices } from '@/utils/constants';
import initTranslations from '@/app/i18n';

const Services = async({locale }:{locale :string }) => {

  const { t } = await initTranslations(locale, ['homepage']);  

  return (
    <div className="flex flex-col items-center justify-center " id="servicios">
      <Subtitle subtitle={t("services_header")} />
      <CardHoverEffectDemo cardsArray={homepageServices} />
    </div>
  )
}

export default Services