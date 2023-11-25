import React from 'react'
import s,{ layout } from '../style'
import {PiBuildings} from 'react-icons/pi'
import beb from '../assets/bebnath.jpg'

export const RightSidebar = () => {
  return (
    <div className={`${layout.right_bar}`}>
      <div className={`${layout.right_sec1}`}>
        <PiBuildings className={`${s.icon3}`}/>
        <div className="text-xs xl:text-sm">
          Academy of Technology
        </div>
      </div>
      <div className={`${layout.right_sec2}`}>
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
        
      </div>
      <div className={`${layout.right_sec2}`}>
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
      </div>
      <div className={`${layout.right_sec2}`}>
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
        <img src={beb} alt="myicon" className={`${s.profilePic}`} />
      </div>
    </div>
  )
}
