import React from 'react'
import s,{layout} from '../style'
import {BiHome, BiUserPlus, BiSolidCalendar, } from 'react-icons/bi'
import {PiSquaresFour, PiChalkboardTeacherBold} from 'react-icons/pi'
import {FaUsers, FaBriefcase,  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const LeftSidebar = () => {
  return (
    <div className={`${layout.left_bar}`}>
      <Link to="/" className={`${layout.route}`}>
          <BiHome className={`${s.icon}`}/>
          Home
      </Link>
      <Link to="/following" className={`${layout.route}`}>
        <BiUserPlus className={`${s.icon}`}/>
        Following
      </Link>
      <Link to="/spaces" className={`${layout.route}`}>
        <FaUsers className={`${s.icon}`}/>
        Spaces
      </Link>
      <Link to="/jobs" className={`${layout.route}`}>
        <FaBriefcase className={`${s.icon}`}/>
        Jobs
      </Link>
      
      <Link to="/public" className={`${layout.route}`}>
        <PiSquaresFour className={`${s.icon}`}/>
        Public
      </Link>
      
      <Link to="/comp" className={`${layout.route}`}>
        <BiSolidCalendar className={`${s.icon}`}/>
        Competitions
      </Link>
     
      <Link to="/mentorships" className={`${layout.route}`}>
        <PiChalkboardTeacherBold className={`${s.icon}`}/>
        Mentorships
      </Link>
      
    </div>
  )
}
