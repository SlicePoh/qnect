import React from 'react'
import { Navbar } from '../components/Navbar'
import { MobileNav } from '../components/MobileNav'
import { Outlet } from 'react-router'

const Single = () => {
  return (
    <div className="text-white"> 
        <Navbar/>
        <MobileNav/>
        <Outlet/>
    </div>
  )
}
export default Single;
