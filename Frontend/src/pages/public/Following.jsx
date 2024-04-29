import React, { useEffect } from 'react'
import { layout } from '../../style'

import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions } from '../../redux/slices/Question';

export const Following = () => {
  const dispatch=useDispatch();
  const questionSelect = useSelector((state) => state.question);
  
  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch]);

  return (
    <div className={`${layout.hero} w-full h-screen`}>
      {questionSelect.question && questionSelect.status==='succeeded' ?
        <>
          {questionSelect.question.data.question.map((que)=>(
              <div className='text-lg mx-10 mt-20' key={que._id}>
                <div className="">
                {que.title}
                </div>
                {que.likes}
                {que.tags.map((tag,i)=>(
                  <div key={i} className="text-sm text-rose-1">
                    {tag}
                  </div>
                ))}
              </div>
            ))}
        </>
        : null
      }
    </div>
  )
}
