import React, { useEffect } from 'react'
import { layout } from '../../style'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/slices/User';


export const Spaces = () => {
  const dispatch = useDispatch();
  const userSelect = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={`${layout.hero} w-full`}>
      {userSelect.user && userSelect.status === 'succeeded' ?
        <>
          {userSelect.user.data.user.map((u) => (
            <div className='text-sm mx-10 mt-20' key={u._id}>
              <div>
                {u.name}
              </div>
              <div>
                {u.email}
              </div>
              <div>
                {u.password}
              </div>
              <div>
                {u.college}
              </div>
              <div>
                {u.verified}
              </div>
              <div>
                {u.department}
              </div>
            </div>
          ))}
        </>
        : null
      }
    
    </div>
  )
}
