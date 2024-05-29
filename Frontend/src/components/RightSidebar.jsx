import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import s, { layout } from '../style'
import { PiBuildings } from 'react-icons/pi'
import beb from '../assets/profiles/bebnath.jpg'
import shan from '../assets/profiles/shanit.jpg'
import dibya from '../assets/profiles/dibya.jpeg'
import ray from '../assets/profiles/rayoti.jpg'
import rish from '../assets/profiles/rish.jpg'
import { getAllUsers } from '../redux/slices/User';

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

export const RightSidebar = () => {
  const dispatch = useDispatch();
  const userSelect = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  let currentUser = {};
  useEffect(() => {
    if (token) {
      dispatch(getAllUsers()).catch((error) => {
        console.error('Error fetching users in the frontend:', error);
      });
    }
  }, [dispatch, token]);

  if (userSelect.curr && userSelect.user && userSelect.status === 'succeeded') {
    currentUser = userSelect.user.data.user.find((userData) => userData._id === userSelect.curr.data._id)
  }

  // const currentUserImage = imageID.find((image) => currentUser._id === image.id);
  // const imagePath = currentUserImage ? currentUserImage.path : null;
  // const profileColor = useSelector((state) => state.profile.colors[currentUser._id]);

  return (
    <div className={`${layout.right_bar}`}>
      {(userSelect.user && userSelect.status === 'succeeded') && (
        <>
          <div className={`${layout.right_sec1}`}>
            <PiBuildings className={`${s.icon3}`} />
            <div className="text-xs xl:text-sm">
              {currentUser.college}
            </div>
          </div>
          <div className={`${layout.right_sec2}`}>
            <img src={beb} alt="myicon" className={`${s.profilePic}`} />
            <img src={ray} alt="myicon" className={`${s.profilePic}`} />
            <img src={rish} alt="myicon" className={`${s.profilePic}`} />
          </div>
          <div className={`${layout.right_sec2}`}>
            <img src={rish} alt="myicon" className={`${s.profilePic}`} />
            <img src={shan} alt="myicon" className={`${s.profilePic}`} />
            <img src={dibya} alt="myicon" className={`${s.profilePic}`} />
          </div>
          <div className={`${layout.right_sec2}`}>
            <img src={shan} alt="myicon" className={`${s.profilePic}`} />
            <img src={beb} alt="myicon" className={`${s.profilePic}`} />
          </div>
        </>
      )}

    </div>
  )
}
