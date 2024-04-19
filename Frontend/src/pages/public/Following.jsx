import React, { useEffect } from 'react'
import { layout } from '../../style'

import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions } from '../../redux/slices/Question';

export const Following = () => {
  const dispatch=useDispatch();
  const questionQuote = useSelector((state) => state.quote);
  const status = useSelector((state) => state.status);
  
  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch]);

  if(questionQuote){
    console.log(questionQuote);
    console.log(status);
  }
  return (
    <div className={`${layout.hero} w-full h-screen`}>
      {questionQuote && status==='succeeded' ?
        <>
          {questionQuote.data.question.map((que,i)=>(
              <div className='text-xs mx-96' key={i}>
                <div className="">
                {que.title}
                </div>
                {que.likes}
              </div>
            ))}
        </>
        : null
      }
    </div>
  )
}
