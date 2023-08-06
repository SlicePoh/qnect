import React from 'react'
import s, {layout} from '../style'
import {BiSearchAlt,BiBell} from 'react-icons/bi'
import {PiChatCircleTextBold} from 'react-icons/pi'
import beb from '../assets/bebnath.jpg'

export const Navbar = () => {
  return (
    <div className={`${layout.navbar}`}>
      <div className="text-rose-1 text-4xl font-bold">Qnect</div>
      
      <div className={`${s.flexCenter}`}>
        <div className={`${s.flexCenter} px-2 mr-4 rounded-lg w-80 h-10 bg-dark-3`}>
          <BiSearchAlt className={`${s.icon2}`}/>
          <input placeholder="Search Qnect" className=" bg-dark-3 placeholder-beige rounded-lg h-10 outline-none w-full p-1 "/>
        </div>
        <button>
          <PiChatCircleTextBold className={`${s.icon2}`}/>
        </button>
        <button>
          <BiBell className={`${s.icon2}`}/>
        </button>
        <button>
          <img src={beb} alt="profile" className="w-12 h-auto rounded-full"></img>
        </button>
      </div>
    </div>
  )
}
