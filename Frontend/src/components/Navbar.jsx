import React from 'react'
import s, {layout} from '../style'
import {BiSearchAlt,BiBell} from 'react-icons/bi'
import {PiChatCircleTextBold} from 'react-icons/pi'
import beb from '../assets/bebnath.jpg'
import { RxHamburgerMenu } from 'react-icons/rx'

export const Navbar = () => {

  const openProfile=()=>{

  }

  return (
    <div className={`${layout.navbar}`}>
      <div className={`${s.flexCenter}`}>
        <div className="flex md:hidden">
          <RxHamburgerMenu className={`${s.icon2}`}/>
        </div>
        <div className="text-rose-1 mx-2 text-2xl md:text-4xl font-bold">Qnect</div>
      </div>
      
      <div className={`${s.flexCenter}`}>
        <div className={`${s.flexCenter} hidden sm:flex px-2 mr-4 rounded-lg w-40 md:w-80 h-10 bg-dark-3`}>
          <BiSearchAlt className={`${s.icon2}`}/>
          <input placeholder="Search Qnect" className={`${s.search_text}`}/>
        </div>
        <button>
          <PiChatCircleTextBold className={`${s.icon2}`}/>
        </button>
        <button>
          <BiBell className={`${s.icon2}`}/>
        </button>
        <button onClick={openProfile}>
          <img src={beb} alt="profile" className="w-12 h-auto rounded-full"></img>
        </button>
      </div>
    </div>
  )
}
