import React from 'react'
import s, { layout } from '../style'
import { Link } from 'react-router-dom'
import {BiHome, BiUserPlus, BiSolidCalendar, } from 'react-icons/bi'
import {PiSquaresFour, PiChalkboardTeacherBold} from 'react-icons/pi'
import {FaUsers, FaBriefcase,  } from 'react-icons/fa'

export const MobileNav = () => {
  return (
    <div className={`${layout.mobilenav}`}>
        <Link to="/" >
          <BiHome className={`${s.icon2}`}/>
      </Link>

      <Link to="/following" >
        <BiUserPlus className={`${s.icon2}`}/>
      </Link>

      <Link to="/spaces" >
        <FaUsers className={`${s.icon2}`}/>
      </Link>

      <Link to="/jobs" >
        <FaBriefcase className={`${s.icon2}`}/>
      </Link>
      
      <Link to="/public" >
        <PiSquaresFour className={`${s.icon2}`}/>
      </Link>
      
      <Link to="/comp" >
        <BiSolidCalendar className={`${s.icon2}`}/>
      </Link>
     
      <Link to="/mentorships" >
        <PiChalkboardTeacherBold className={`${s.icon2}`}/>
      </Link>
    </div>
  )
}
