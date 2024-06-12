import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import initTranslations from "@/app/i18n";

const Features = async({locale }:{locale :string }) => {

  const { t } = await initTranslations(locale, ['homepage', 'common']); 

    return ( 
      <div className="container md:flex-row flex-col items-center flex justify-between pb-10">
        <div className="justify-between md:w-2/3">
          <Title title={t("features_header")} className="max-w-[600px]" />

          <div className="text-2xl mb-8 dark:text-slate-300">
          {t("features_subheader")}
          </div>
          <Button size={"lg"}>
            <Link href={"/servicios"}>{t("common:button_services")}</Link>
          </Button>
        </div>

        <div className="mt-10 md:mt-0">
          <img src="/amn-iso.png" alt="amn-logo" className="md:w-[500px] animate-spin-slow" />
        </div>      
      </div>

  );
}
 
export default Features;