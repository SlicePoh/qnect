import React from 'react'
import { layout } from '../style'

export const Hero = () => {
  return (
    <div className={`${layout.hero} `}>
      <div className={`${layout.ask}`}>
        <div className={`rounded-lg w-3/6 h-10 bg-dark-2 invisible`}>
          <input placeholder="Write your question" className=" outline-none w-full p-1 mr-4"/>
        </div>
        <button className={`rounded-lg w-2/6 h-10 ml-4 bg-rose-1`}>
          Ask a question
        </button>
      </div>
      <div className={`${layout.ans}`}></div>
      <div className={`${layout.ans}`}></div>
    </div>
  )
}
