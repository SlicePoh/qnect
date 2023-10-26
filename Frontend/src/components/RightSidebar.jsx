import React from 'react'
import s,{ layout } from '../style'
import {PiBuildings} from 'react-icons/pi'

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

      </div>
      <div className={`${layout.right_sec2}`}>

      </div>
      <div className={`${layout.right_sec2}`}>

      </div>
    </div>
  )
}
