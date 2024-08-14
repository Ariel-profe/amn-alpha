import Link from "next/link";

import { Button } from "@/components/ui/button";

import initTranslations from "@/app/i18n";
import { Subtitle } from "@/components/ui/subtitle";
import { AnimatedListDemo } from "./notification";

const Features = async({locale }:{locale :string }) => {

  const { t } = await initTranslations(locale, ['homepage', 'common']); 

    return ( 
      <div className="flex flex-col items-center justify-center gap-y-5 pb-10">
        <Subtitle subtitle={t("features_header")} />
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center gap-4 mb-8 dark:text-slate-300 w-full">
            <h3 className="text-xl lg:text-5xl text-center max-w-[600px]">
              {t("features_subheader")}
            </h3>
            <Button size={"lg"}>
              <Link href={"/tecnologias"}>{t("common:button_technologies")}</Link>
            </Button>
          </div>
          <AnimatedListDemo />
        </div>
      </div>
  );
}
 
export default Features;