import React, { useEffect, useState } from 'react'
import s, { layout } from '../style'
import { BiSearchAlt, BiBell } from 'react-icons/bi'
import { PiChatCircleTextBold } from 'react-icons/pi'
import beb from '../assets/profiles/bebnath.jpg'
import shan from '../assets/profiles/shanit.jpg'
import dibya from '../assets/profiles/dibya.jpeg'
import ray from '../assets/profiles/rayoti.jpg'
import rish from '../assets/profiles/rish.jpg'
//import kathal from '../assets/profiles/kathal.jpg'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '../assets/logo.png'
import logoname from '../assets/logoname.png'
import { Link, useNavigate } from 'react-router-dom'
// import users_data from '../data/json/user_data.json'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/slices/User'
import { CgProfile } from "react-icons/cg";
import { clearToken } from '../redux/slices/Auth'

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
  // {
  //   id: '6654c696ad0ccb6eb645a876',
  //   path: kathal,
  // },
]

export const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const userSelect = useSelector((state) => state.user);
  //const token = useSelector((state) => state.auth.token);
  let currentUser={};
  const [searchOpen, setSearchOpen] = useState(false);
  const [openProfileOptions, setOpenProfileOptions] = useState(false);
  const openSearch = () => {
    setSearchOpen(!searchOpen);
  }

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  if(userSelect.curr && userSelect.user && userSelect.status==='succeeded'){
    currentUser = userSelect.user.data.user.find((u) => u._id === userSelect.curr.data._id)
  }
  const profileColor = useSelector((state) => state.profile.colors[currentUser._id]);

  const currentUserImage = imageID.find((image) => currentUser._id === image.id);
  const imagePath = currentUserImage ? currentUserImage.path : null;

  const handleLogout=()=>{
    dispatch(clearToken());
    navigate("/");
  }

  return (
    <div className={`${layout.navbar}`}>
      {(userSelect.user && userSelect.status==='succeeded') && (
        <>
          <div className={`${layout.navtop}`}>
            <div className={`${s.flexCenter} gap-3`}>
              <Link to="/main">
                <img src={logo} alt='logo' className={`${s.logo}`}></img>
              </Link>
              <img src={logoname} alt='logoname' className="w-20 h-auto"></img>
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
              <button className="hidden md:block" onClick={ ()=> setOpenProfileOptions(!openProfileOptions)}>
                {imagePath ? (
                  <img src={imagePath} alt="profile" className={`${s.profilePic}`} />
                ) : (
                  <CgProfile className={`${profileColor} text-3xl md:text-5xl `} />
                )}
              </button>
              <div className="flex md:hidden">
                <RxHamburgerMenu className={`${s.icon2}`} />
              </div>

              {openProfileOptions &&
                <div className="absolute flex flex-col justify-center font-semibold items-start p-5 gap-3 rounded-lg bg-dark-3 w-32 h-auto top-20 right-10">
                  <Link to="/single/profile" className="">Profile</Link>
                  <button onClick={handleLogout} className="">Logout</button>
                </div>
              }
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
