import React from 'react'
import s,{layout} from '../style'
import {BiHome, BiUserPlus, BiSolidCalendar, } from 'react-icons/bi'
import {PiSquaresFour, PiChalkboardTeacherBold} from 'react-icons/pi'
import {FaUsers, FaBriefcase,  } from 'react-icons/fa'

export const LeftSidebar = () => {
  return (
    <div className={`${layout.left_bar}`}>
      <div className={`${layout.route}`}>
        <BiHome className={`${s.icon}`}/>
        Home
      </div>
      <div className={`${layout.route}`}>
        <BiUserPlus className={`${s.icon}`}/>
        Following
      </div>
      <div className={`${layout.route}`}>
        <FaUsers className={`${s.icon}`}/>
        Spaces
      </div>
      <div className={`${layout.route}`}>
        <FaBriefcase className={`${s.icon}`}/>
        Jobs
      </div>
      <div className={`${layout.route}`}>
        <PiSquaresFour className={`${s.icon}`}/>
        Public
      </div>
      <div className={`${layout.route}`}>
        <BiSolidCalendar className={`${s.icon}`}/>
        Competitions
      </div>
      <div className={`${layout.route}`}>
        <PiChalkboardTeacherBold className={`${s.icon}`}/>
        Mentorships
      </div>
    </div>
  )
}
