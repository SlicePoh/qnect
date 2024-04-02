import React from 'react'
import s, { layout } from '../style'
import { AnswerCard } from './AnswerCard'
import beb from '../assets/profiles/bebnath.jpg'
import users_data from '../data/json/user_data.json'
import answers_data from '../data/json/answer_data.json'
import questions_data from '../data/json/question_data.json'

export const Hero = () => {
  const currentUser =  users_data.find((userData) => userData._id === 2)
  return (
    <div className={`${layout.hero} `}>
      <div className={`${layout.ask}`}>
        <button>
          <img src={beb} alt="beb" className={`${s.profilePic} mr-8`}/>
        </button>
       
        <input placeholder="what are your doubts today?" className={`${s.doubts_text} `} />
       
      </div>
      {questions_data.map((question) => (
        <AnswerCard
          key={question._id}
          question={question}
          answers={answers_data}
          users={users_data}
          currentUser={currentUser}
        />
      ))}
   
    </div>
  )
}
