import React, { useEffect, useState } from 'react'
import s,{ layout } from '../../style'
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, deleteAnswer, getAllAnswers } from '../../redux/slices/Answers'
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Jobs = () => {
  const dispatch = useDispatch();
  const answerSelect = useSelector((state) => state.answer);

  const [body, setBody] = useState('');
  const [votes, setVotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnswer({ body, votes }));
    setBody('');
    setVotes('');
  };

  const handleDelete=(id)=>{
    dispatch(deleteAnswer(id))
  } 

  useEffect(() => {
    dispatch(getAllAnswers());
  }, [dispatch]);
  return (
    <div className={`${layout.hero} w-full h-screen`}>
          {answerSelect.status === 'loading' ? (
                <div>Loading...</div>
            ) : answerSelect.status === 'failed' ? (
                <div>Error: {answerSelect.error}</div>
            ) : answerSelect.status === 'succeeded' ?
          <div className='flex flex-col mt-20 gap-5'>
            {Array.isArray(answerSelect.answer.data.answer) && answerSelect.answer.data.answer.map((ans, i) => (
              <div className='text-sm mx-10' key={i}>
                <div className="">
                  {ans.body}
                </div>
                  {ans.votes}
                <RiDeleteBin5Fill className='text-rose-1 text-xl' onClick={()=>handleDelete(ans._id)}/>
              </div>
            ))}
          </div>
          : 
          null
        }
          <div className={`${s.flexCenter} flex-col w-60 rounded-xl bg-dark-1 p-5`}>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div>
            <label>body:</label>
            <input
            className='bg-dark-2 rounded-lg p-1'
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div>
            <label>Votes:</label>
            <input
            className='bg-dark-2 rounded-lg p-1'
              type="number"
              value={votes}
              onChange={(e) => setVotes(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
