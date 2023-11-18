import React, { useState } from 'react'
import s, { layout } from '../style'
import { BiSearchAlt, BiBell } from 'react-icons/bi'
import { PiChatCircleTextBold } from 'react-icons/pi'
import beb from '../assets/bebnath.jpg'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => {
    setSearchOpen(!searchOpen);
  }
  const openProfile = () => {

  }

  return (
    <div className={`${layout.navbar}`}>
      <div className={`${layout.navtop}`}>
        <div className={`${s.flexCenter}`}>
          <Link to="/">
            <img src={logo} alt='logo' className={`${s.logo}`}></img>
          </Link>
        </div>

        <div className={`${s.flexCenter}`}>
          <button onClick={openSearch}>
            <BiSearchAlt className={`${s.icon2} flex sm:hidden`} />
          </button>
          <div className={`${s.flexCenter} hidden sm:flex px-2 mr-4 rounded-lg w-40 md:w-80 h-10 bg-dark-3`}>
            <BiSearchAlt className={`${s.icon2}`} />
            <input placeholder="Search Qnect" className={`${s.search_text}`} />
          </div>
          <button>
            <PiChatCircleTextBold className={`${s.icon2}`} />
          </button>
          <button>
            <BiBell className={`${s.icon2}`} />
          </button>
          <button onClick={openProfile}>
            <img src={beb} alt="profile" className={`${s.profile}`}></img>
          </button>
          <div className="flex md:hidden">
            <RxHamburgerMenu className={`${s.icon2}`} />
          </div>
        </div>
      </div>
      {searchOpen ? (
        <input placeholder="Search Qnect" className={`${s.search_text1} `} />
      ):(
        <div className=""></div>
      )}

    </div>
  )
}
