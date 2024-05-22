import React from 'react'
import { Subtitle } from '../ui/subtitle'
import { CardHoverEffectDemo } from '../ui/card-hover'
import { aboutGoals } from '@/utils/constants'

const Goals = () => {
  return (
    <div className="container flex-col items-center justify-center" id="objetivos">
      <Subtitle subtitle="Lo que nos motiva a ser quienes somos." />
      <CardHoverEffectDemo cardsArray={aboutGoals} />
    </div>
  )
}

export default Goals