import React, { useEffect } from 'react'
import s, { layout } from '../style'
import { AnswerCard } from './AnswerCard'
import { useDispatch, useSelector } from 'react-redux';
import beb from '../assets/profiles/bebnath.jpg'
import shan from '../assets/profiles/shanit.jpg'
import dibya from '../assets/profiles/dibya.jpeg'
import ray from '../assets/profiles/rayoti.jpg'
import rish from '../assets/profiles/rish.jpg'
import users_data from '../data/json/user_data.json'
import answers_data from '../data/json/answer_data.json'
import questions_data from '../data/json/question_data.json'
import { getAllAnswers } from '../redux/slices/Answers';


const imageID = [
  {
    id: 1,
    path: beb,
  },
  {
    id: 2,
    path: shan,
  },
  {
    id: 3,
    path: ray,
  },
  {
    id: 4,
    path: dibya,
  },
  {
    id: 5,
    path: rish,
  },
]
export const Hero = () => {
  const dispatch=useDispatch();
  const answerSelect = useSelector((state) => state.answer);

  
  useEffect(() => {
    dispatch(getAllAnswers());
  }, [dispatch]);

  if(answerSelect){
    console.log(answerSelect.status);
    // console.log(answerSelect.answer.data.answer);
  }

  const currentUser = users_data.find((userData) => userData._id === 4)
  return (
    <div className={`${layout.hero} `}>
      <div className={`${layout.ask}`}>
        <button onClick={()=>dispatch(getAllAnswers())}>
          <img src={imageID.find((image) => currentUser._id === image.id).path} alt="profile" className={`${s.profilePic}`}></img>
        </button>
       
        <input placeholder='what are your doubts today?' className={`${s.doubts_text} `} />

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
      
      {/* {answerSelect && answerSelect.answer.status==='succeeded' ?
        <>
          {answerSelect.answer.data.answer.map((ans,i)=>(
              <div className='text-xs mx-96' key={i}>
                <div className="">
                {ans.body}
                </div>
                {ans.votes}
              </div>
            ))}
        </>
        : null
      } */}
    </div>
  )
}
