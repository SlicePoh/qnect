import React, { useEffect, useState } from 'react'
import s, { layout } from '../../style'
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, deleteQuestion, getAllQuestions } from '../../redux/slices/Question';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { getAllUsers } from '../../redux/slices/User';

export const Following = () => {
  const dispatch = useDispatch();
  const questionSelect = useSelector((state) => state.question);
  const userSelect = useSelector((state) => state.user);

  const [title, setTitle] = useState('');
  const [likes, setLikes] = useState(0);
  const [user_id, setUser_id] = useState('')

  useEffect(() => {
    dispatch(getAllQuestions()).catch((error) => {
      console.error('Error fetching questions in the frontend:', error);
    });
    dispatch(getAllUsers()).catch((error) => {
      console.error('Error fetching users in the frontend:', error);
    });
  }, [dispatch]);
  useEffect(() => {
    if (userSelect.user && userSelect.status === 'succeeded') {
      const currentUser = userSelect.user.data.user.find((userData) => userData._id === '6632937223fbd5822d22dfc7')
      setUser_id(currentUser._id);
    }
  }, [userSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addQuestion({ user_id, title, likes })).then(() => {

      setTitle('');
      setLikes(0);
    }).catch((error) => {
      console.error('Error adding question in the frontend:', error);
    });
  };


  const handleDelete = (id) => {
    dispatch(deleteQuestion(id)).catch((error) => {
      console.error('Error deleting question in the frontend:', error);
    });
  }

  return (
    <div className={`${layout.hero} w-full min-h-screen pb-20`}>
      {questionSelect.question && questionSelect.status === 'succeeded' ?
        <>
          {questionSelect.question.data.question.map((que) => (
            <div className='text-lg mx-10 mt-20' key={que._id}>
              <div className="">
                {que.title}
              </div>
              {que.likes}
              {que.tags.map((tag, i) => (
                <div key={i} className="text-sm text-rose-1">
                  {tag}
                </div>
              ))}
              <RiDeleteBin5Fill className='text-dark-2 text-xl' onClick={() => handleDelete(que._id)} />
            </div>
          ))}
        </>
        : null
      }

      <div className={`${s.flexCenter} fixed top-24 flex-col w-60 rounded-xl bg-dark-1 p-5`}>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              className='bg-dark-2 rounded-lg p-1'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Likes:</label>
            <input
              className='bg-dark-2 rounded-lg p-1'
              type="number"
              value={likes}
              onChange={(e) => setLikes(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
