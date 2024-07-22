import { Subtitle } from "../ui/subtitle"

export const ConnectUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20">
        <Subtitle subtitle="En que podemos ayudarte hoy?" />
        <img src="/images/banner.png" alt="banner-amn" className="rounded-2xl" />
    </div>
  )
}
