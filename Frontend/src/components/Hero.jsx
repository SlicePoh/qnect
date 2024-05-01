import React, { useEffect } from 'react'
import s, { layout } from '../style'
import { AnswerCard } from './AnswerCard'
import beb from '../assets/profiles/bebnath.jpg'
import shan from '../assets/profiles/shanit.jpg'
import dibya from '../assets/profiles/dibya.jpeg'
import ray from '../assets/profiles/rayoti.jpg'
import rish from '../assets/profiles/rish.jpg'
import users_data from '../data/json/user_data.json'
import answers_data from '../data/json/answer_data.json'
import questions_data from '../data/json/question_data.json'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuestions } from '../redux/slices/Question'
import { getAllUsers } from '../redux/slices/User'
import { getAllAnswers } from '../redux/slices/Answers'


const imageID = [
  {
    id: '662fd6930752b953da15b79f',
    path: beb,
  },
  {
    id: '6612d796d603ff13d984eec7',
    path: shan,
  },
  {
    id: '663243ef3fc56bd77e209bb3',
    path: ray,
  },
  {
    id: '662fd7090752b953da15b7a1',
    path: dibya,
  },
  {
    id: '662fd8cf0752b953da15b7ac',
    path: rish,
  },
]
export const Hero = () => {
  const dispatch=useDispatch();
  const questionSelect = useSelector((state) => state.question);
  const answerSelect = useSelector((state) => state.answer);
  const userSelect = useSelector((state) => state.user);
  let currentUser={};

  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(getAllAnswers());
    dispatch(getAllUsers());
  }, [dispatch]);
  if(userSelect.user && userSelect.status==='succeeded'){
    currentUser = userSelect.user.data.user.find((userData) => userData._id === '663243ef3fc56bd77e209bb3')
  }
  console.log(currentUser);
  return (
    <div className={`${layout.hero} `}>
      {(userSelect.user && userSelect.status==='succeeded') && (
        <>
          <div className={`${layout.ask}`}>
            <button>
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
        </>
      )}
    </div>
  )
}
