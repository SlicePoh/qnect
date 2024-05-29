import React, { useEffect } from 'react'
import { layout } from '../../style'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/slices/User';
import beb from '../../assets/profiles/bebnath.jpg'
import shan from '../../assets/profiles/shanit.jpg'
import dibya from '../../assets/profiles/dibya.jpeg'
import ray from '../../assets/profiles/rayoti.jpg'
import rish from '../../assets/profiles/rish.jpg'
import { CgProfile } from 'react-icons/cg';
import s from '../../style'

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


export const Profile = () => {
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

  const currentUserImage = imageID.find((image) => currentUser._id === image.id);
  const imagePath = currentUserImage ? currentUserImage.path : null;
  const profileColor = useSelector((state) => state.profile.colors[currentUser._id]);

  return (
    <div className={`${layout.hero} w-full h-screen p-20`}>
      {(userSelect.user && userSelect.status === 'succeeded') && (
        <>
          <div className="">
            {imagePath ? (
              <img src={imagePath} alt="profile" className={`${s.profilePic}`} />
            ) : (
              <CgProfile className={`${profileColor} text-6xl md:text-7xl `} />
            )}
          </div>
          <div className="">{currentUser.name}</div>
          <div className="">{currentUser.email}</div>
          <div className="">{currentUser.college}</div>
          <div className="">{currentUser.department}</div>
          <div className="">{currentUser.year}</div>
        </>
      )}
    </div>
  )
}
