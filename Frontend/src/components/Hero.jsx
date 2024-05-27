import React, { useEffect, useRef, useState } from 'react'
import s, { layout } from '../style'
import { AnswerCard } from './AnswerCard'
import beb from '../assets/profiles/bebnath.jpg'
import shan from '../assets/profiles/shanit.jpg'
import dibya from '../assets/profiles/dibya.jpeg'
import ray from '../assets/profiles/rayoti.jpg'
import rish from '../assets/profiles/rish.jpg'
// import users_data from '../data/json/user_data.json'
// import answers_data from '../data/json/answer_data.json'
// import questions_data from '../data/json/question_data.json'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuestions } from '../redux/slices/Question'
import { getAllUsers } from '../redux/slices/User'
import { getAllAnswers } from '../redux/slices/Answers'
import { PiPaperPlaneRightFill } from "react-icons/pi";

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';


const imageID = [
  {
    id: '6632922623fbd5822d22dfb9',
    path: beb,
  },
  {
    id: '6632930223fbd5822d22dfc5',
    path: shan,
  },
  {
    id: '6632937223fbd5822d22dfc7',
    path: ray,
  },
  {
    id: '663293aa23fbd5822d22dfca',
    path: dibya,
  },
  {
    id: '663293d623fbd5822d22dfcc',
    path: rish,
  },
]
export const Hero = () => {
  const dispatch = useDispatch();
  const questionSelect = useSelector((state) => state.question);
  const answerSelect = useSelector((state) => state.answer);
  const userSelect = useSelector((state) => state.user);
  let currentUser = {};
  const containerRef= useRef();
  const enterQuestionButtonRef=useRef(null);

  const [questionInput,setQuestionInput]=useState('');

 
  useEffect(() => {
    dispatch(getAllQuestions()).catch((error) => {
      console.error('Error fetching questions in the frontend:', error);
    });
    dispatch(getAllAnswers()).catch((error) => {
      console.error('Error fetching answers in the frontend:', error);
    });
    dispatch(getAllUsers()).catch((error) => {
      console.error('Error fetching users in the frontend:', error);
    });
  }, [dispatch]);

  const { contextSafe } = useGSAP(()=>{
   
  },{scope: containerRef});

  const handleQuestionInputChange = contextSafe((e) => {
    setQuestionInput(e.target.value);
    if(e.target.value === ''){
      gsap.to(".enterQuestionButton",{
        opacity: 0,
        x: 30,
        ease: "power1.inOut",
        duration: 0.3,
        onComplete: () => {
          enterQuestionButtonRef.current.classList.add('hidden');
        }
      })
    }
    else{
      gsap.to(".enterQuestionButton",{
        opacity: 1,
        x: 0,
        ease: "power1.inOut",
        duration: 0.3,
        onStart: () => {
          enterQuestionButtonRef.current.classList.remove('hidden');
        }
      })
    }
  });


  if (userSelect.user && userSelect.status === 'succeeded') {
    currentUser = userSelect.user.data.user.find((userData) => userData._id === '6632937223fbd5822d22dfc7')
  }

  return (
    <div ref={containerRef} className={`${layout.hero} `}>
      {(userSelect.user && userSelect.status === 'succeeded') && (
        <>
          <div className={`${layout.ask}`}>
            <button>
              <img src={imageID.find((image) => currentUser._id === image.id).path} alt="profile" className={`${s.profilePic}`}></img>
            </button>

            <input value={questionInput} onChange={handleQuestionInputChange} placeholder='what are your doubts today?' className={`${s.doubts_text} `} />
           <div className="enterQuestionButton hidden" ref={enterQuestionButtonRef}>
              <PiPaperPlaneRightFill className=" cursor-pointer text-4xl text-rose-1"/>
           </div>

          </div>
          {(answerSelect.answers && questionSelect.question) ?
            <>
              {answerSelect.status==='loading' || questionSelect.status === 'loading' ? (
                <div>Loading...</div>
              ) : answerSelect.status==='failed' || questionSelect.status === 'failed' ? (
                <div>Error: {questionSelect.error} {answerSelect.error}</div>
              ) : answerSelect.status==='succeeded' && questionSelect.status === 'succeeded' ?
                <>
                  {Array.isArray(questionSelect.question.data.question) && questionSelect.question.data.question.map((que) => (
                    <AnswerCard
                      key={que._id}
                      question={que}
                      answers={answerSelect.answers.data.answer}
                      users={userSelect.user.data.user}
                      currentUser={currentUser}
                    />
                  ))}
                </>
                :
                <div className="">NULL 1</div>
              }
            </>
            :
            <div className="">NULL 2</div>
          }
        </>
      )}
    </div>
  )
}
