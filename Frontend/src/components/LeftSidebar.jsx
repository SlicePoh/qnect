import React from 'react'
import s,{layout} from '../style'
import {BiHome, BiUserPlus, BiSolidCalendar, } from 'react-icons/bi'
import {PiSquaresFour, PiChalkboardTeacherBold} from 'react-icons/pi'
import {FaUsers, FaBriefcase,  } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

export const LeftSidebar = () => {


  const location = useLocation();
  // console.log(location.pathname);
  const path = location.pathname;
  
  return (
    <div className={`${layout.left_bar}`}>
      <Link to="/main" className={`${layout.route} ${path==="/main" ? "bg-rose-3 w-full text-white border-r-8 border-rose-1" : ""}`}>
          <BiHome className={`${s.icon}`}/>
          Home
      </Link>
      {/* <Link to="/main/following" className={`${layout.route} ${path==="/main/following" ? "bg-rose-3 w-full text-white border-r-8 border-rose-1" : ""}`}>
        <BiUserPlus className={`${s.icon}`}/>
        Following
      </Link> */}
      {/* <Link to="/main/spaces" className={`${layout.route} ${path==="/main/spaces" ? "bg-rose-3 w-full text-white border-r-8 border-rose-1" : ""}`}>
        <FaUsers className={`${s.icon}`}/>
        Spaces
      </Link> */}
      
      <Link to="/main/public" className={`${layout.route} ${path==="/main/public" ? "bg-rose-3 w-full text-white border-r-8 border-rose-1" : ""}`}>
        <PiSquaresFour className={`${s.icon}`}/>
        Public
      </Link>
      <Link to="/main/jobs" className={`${layout.route} ${path==="/main/jobs" ? "bg-rose-3 w-full text-white border-r-8 border-rose-1" : ""}`}>
        <FaBriefcase className={`${s.icon}`}/>
        Jobs
      </Link>
      
      <Link to="/main/comp" className={`${layout.route} ${path==="/main/comp" ? "bg-rose-3 w-full text-white border-r-8 border-rose-1" : ""}`}>
        <BiSolidCalendar className={`${s.icon}`}/>
        Competitions
      </Link>
     
      <Link to="/main/mentorships" className={`${layout.route} ${path==="/main/mentorships" ? "bg-rose-3 w-full text-white border-r-8 border-rose-1" : ""}`}>
        <PiChalkboardTeacherBold className={`${s.icon}`}/>
        Mentorships
      </Link>
      
    </div>
  )
}
