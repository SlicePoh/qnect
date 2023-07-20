import React from 'react'
import { Navbar } from '../components/Navbar'
import { LeftSidebar } from '../components/LeftSidebar'
import { RightSidebar } from '../components/RightSidebar'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <LeftSidebar/>
        <Hero/>
        <RightSidebar/>
        Home
        <Footer/>
    </div>
  )
}
