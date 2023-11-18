import React from 'react'
import s, { layout } from '../style'
import { AnswerCard } from './AnswerCard'
import beb from '../assets/bebnath.jpg'

export const Hero = () => {
  return (
    <div className={`${layout.hero} `}>
      <div className={`${layout.ask}`}>
        <button>
          <img src={beb} alt="beb" className={`${s.profile} mr-8`}/>
        </button>
       
        <input placeholder="what are your doubts today?" className={`${s.doubts_text} `} />
       
      </div>
      <AnswerCard/>
      <AnswerCard/>

    </div>
  )
}
