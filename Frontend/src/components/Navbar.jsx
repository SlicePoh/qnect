import React, { useEffect, useState } from 'react'
import s, { layout } from '../style'
import { BiSearchAlt, BiBell } from 'react-icons/bi'
import { PiChatCircleTextBold } from 'react-icons/pi'
import beb from '../assets/profiles/bebnath.jpg'
import shan from '../assets/profiles/shanit.jpg'
import dibya from '../assets/profiles/dibya.jpeg'
import ray from '../assets/profiles/rayoti.jpg'
import rish from '../assets/profiles/rish.jpg'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import users_data from '../data/json/user_data.json'
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

export const Navbar = () => {
  const dispatch=useDispatch();
  const questionSelect = useSelector((state) => state.question);
  const answerSelect = useSelector((state) => state.answer);
  const userSelect = useSelector((state) => state.user);
  let currentUser={};
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => {
    setSearchOpen(!searchOpen);
  }

  useEffect(() => {
    dispatch(getAllQuestions());
    dispatch(getAllAnswers());
    dispatch(getAllUsers());
  }, [dispatch]);
  if(userSelect.user && userSelect.status==='succeeded'){
    currentUser = userSelect.user.data.user.find((userData) => userData._id === '663243ef3fc56bd77e209bb3')
  }
  return (
    <div className={`${layout.navbar}`}>
      {(userSelect.user && userSelect.status==='succeeded') && (
        <>
          <div className={`${layout.navtop}`}>
            <div className={`${s.flexCenter}`}>
              <Link to="/main">
                <img src={logo} alt='logo' className={`${s.logo}`}></img>
              </Link>
            </div>

            <div className={`${s.flexCenter} gap-2`}>
              <button onClick={openSearch}>
                <BiSearchAlt className={`${s.icon2} flex sm:hidden`} />
              </button>
              <div className={`${s.flexCenter} hidden sm:flex px-2 mr-4 rounded-lg w-40 md:w-80 h-10 bg-dark-3`}>
                <BiSearchAlt className={`${s.icon2}`} />
                <input placeholder="Search Qnect" className={`${s.search_text}`} />
              </div>
              <Link to="/single/messages">
                <PiChatCircleTextBold className={`${s.icon2}`} />
              </Link>
              <button>
                <BiBell className={`${s.icon2}`} />
              </button>
              <Link className="hidden md:block" to="/single/profile">
                <img src={imageID.find((image) => currentUser._id === image.id).path} alt="profile" className={`${s.profilePic}`}></img>
              </Link>
              <div className="flex md:hidden">
                <RxHamburgerMenu className={`${s.icon2}`} />
              </div>
            </div>
          </div>
          {searchOpen && (
            <input placeholder="Search Qnect" className={`${s.search_text1} `} />
          )}
        </>
      )}
    </div>
  )
}
