import React from 'react'
import s, { layout } from '../style'
import { Link, useLocation } from 'react-router-dom'
import {BiHome, BiUserPlus, BiSolidCalendar, } from 'react-icons/bi'
import {PiSquaresFour, PiChalkboardTeacherBold} from 'react-icons/pi'
import {FaUsers, FaBriefcase,  } from 'react-icons/fa'

export const MobileNav = () => {

  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={`${layout.mobilenav}`}>
      <Link to="/main" className={`${layout.mobileRoute} ${path=== "/main" ? "bg-rose-3 text-white border-t-4 border-rose-1": ""}`} >
        <BiHome className={`${s.icon2} mr-0 ${path==="/main" ? "text-white" : ""}`}/>
      </Link>

      <Link to="/main/following" className={`${layout.mobileRoute} ${path=== "/main/following" ? "bg-rose-3 text-white border-t-4 border-rose-1": ""}`} >
        <BiUserPlus className={`${s.icon2} mr-0 ${path==="/main/following" ? "text-white" : ""}`}/>
      </Link>

      <Link to="/main/spaces" className={`${layout.mobileRoute} ${path=== "/main/spaces" ? "bg-rose-3 text-white border-t-4 border-rose-1": ""}`} >
        <FaUsers className={`${s.icon2} mr-0 ${path==="/main/spaces" ? "text-white" : ""}`}/>
      </Link>

      <Link to="/main/jobs" className={`${layout.mobileRoute} ${path=== "/main/jobs" ? "bg-rose-3 text-white border-t-4 border-rose-1": ""}`} >
        <FaBriefcase className={`${s.icon2} mr-0 ${path==="/main/jobs" ? "text-white" : ""}`}/>
      </Link>
      
      <Link to="/main/public" className={`${layout.mobileRoute} ${path=== "/main/public" ? "bg-rose-3 text-white border-t-4 border-rose-1": ""}`} >
        <PiSquaresFour className={`${s.icon2} mr-0 ${path==="/main/public" ? "text-white" : ""}`}/>
      </Link>
      
      <Link to="/main/comp" className={`${layout.mobileRoute} ${path=== "/main/comp" ? "bg-rose-3 text-white border-t-4 border-rose-1": ""}`} >
        <BiSolidCalendar className={`${s.icon2} mr-0 ${path==="/main/comp" ? "text-white" : ""}`}/>
      </Link>
     
      <Link to="/main/mentorships" className={`${layout.mobileRoute} ${path=== "/main/mentorships" ? "bg-rose-3 text-white border-t-4 border-rose-1": ""}`} >
        <PiChalkboardTeacherBold className={`${s.icon2} mr-0 ${path==="/main/mentorships" ? "text-white" : ""}`}/>
      </Link>
    </div>
  )
}
