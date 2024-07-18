import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import initTranslations from "@/app/i18n";
import { OrbitingCirclesDemo } from "@/components/tecnologies/orbiting-circles";

const Features = async({locale }:{locale :string }) => {

  const { t } = await initTranslations(locale, ['homepage', 'common']); 

    return ( 
      <div className="md:flex-row flex-col items-center flex justify-between pb-10">
        <div className="justify-between ">
          <Title title={t("features_header")} className="max-w-[800px]" />

          <div className="text-2xl mb-8 dark:text-slate-300">
          {t("features_subheader")}
          </div>
          <Button size={"lg"}>
            <Link href={"/tecnologias"}>{t("common:button_technologies")}</Link>
          </Button>
        </div>
        
        <OrbitingCirclesDemo />     
      </div>

  );
}
 
export default Features;