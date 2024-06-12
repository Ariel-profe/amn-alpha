import Link from "next/link";
import { Button } from "@/components/ui/button";
import initTranslations from "@/app/i18n";

export const WeBuild = async({locale }:{locale :string }) => {
    const { t } = await initTranslations(locale, ['homepage', 'common']); 
    return (
            <div className="container flex flex-col items-center justify-center mx-auto mt-10 lg:mt-20">
                <div className="text-4xl font-bold mb-5">
                    {t("we_build_header")} <span className="text-amn-light">{locale === "es" ? 'hoy' : 'today'}</span>
                </div>
                <div className="mb-5 text-center max-w-[900px]">
                    {t("we_build_subheader")} 
                </div>
                <Button>
                    <Link href={"/contacto"} >
                        {t("common:button_contact")}
                    </Link>
                </Button>
            </div>
        );
};