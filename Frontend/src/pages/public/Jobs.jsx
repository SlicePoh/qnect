import React, { useEffect, useRef, useState } from 'react'
import s, { layout } from '../../style'
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, deleteAnswer, getAllAnswers } from '../../redux/slices/Answers'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getAllUsers } from '../../redux/slices/User';

export const Jobs = () => {
  const dispatch = useDispatch();
  const answerSelect = useSelector((state) => state.answer);
  const userSelect = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const [body, setBody] = useState('');
  const [votes, setVotes] = useState(0);
  const [question_id, setQuestion_id] = useState('')
  const [user_id, setUser_id] = useState('')
  const currentUser=useRef();

  useEffect(() => {
    dispatch(getAllAnswers(token)).catch((error) => {
      console.error('Error fetching answers in the frontend:', error);
    });
    dispatch(getAllUsers()).catch((error) => {
      console.error('Error fetching users in the frontend:', error);
    });
  }, [dispatch,token]);

  useEffect(() => {
    if(userSelect.curr && userSelect.user && userSelect.status==='succeeded'){
      currentUser.current = userSelect.user.data.user.find((u) => u._id === userSelect.curr.data._id)
      setUser_id(currentUser.current._id);
      setQuestion_id('6632961023fbd5822d22dfdb');
    }
  }, [userSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnswer({data: { question_id, user_id, body, votes },token: token})).then(() => {
  
      setBody('');
      setVotes(0);
    }).catch((error) => {
      console.error('Error adding answer in the frontend:', error);
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteAnswer(id)).catch((error) => {
      console.error('Error deleting answer in the frontend:', error);
    });
  }

  return (
    <div className={`${layout.hero} w-full min-h-screen pb-20`}>
      {answerSelect.status === 'loading' ? (
        <div>Loading...</div>
      ) : answerSelect.status === 'failed' ? (
        <div>Error: {answerSelect.error}</div>
      ) : answerSelect.status === 'succeeded' ?
        <div className='flex flex-col mt-20 gap-5 '>
          {Array.isArray(answerSelect.answers.data.answer) && answerSelect.answers.data.answer.map((ans, i) => (
            <div className='text-xs mx-10 bg-rose-3 rounded-lg p-5' key={i}>
              {ans.body}
              <div className="text-sm font-bold text-green-600">
                {ans.votes}
              </div>
              <RiDeleteBin5Fill className='text-dark-2 text-xl' onClick={() => handleDelete(ans._id)} />
            </div>
          ))}
        </div>
        :
        null
      }
      <div className={`${s.flexCenter} fixed top-24 flex-col w-60 rounded-xl bg-dark-1 p-5`}>
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
