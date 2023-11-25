
import { Navbar } from '../components/Navbar'
import { MobileNav } from '../components/MobileNav'
import { Outlet } from 'react-router'
import { LeftSidebar } from '../components/LeftSidebar'
import { RightSidebar } from '../components/RightSidebar'

const Home = () => {
  return (
    <div className="text-white"> 
        <Navbar/>
        <LeftSidebar/>
        <RightSidebar/>
        <MobileNav/>
        <Outlet/>
    </div>
  )
}
export default Home;
