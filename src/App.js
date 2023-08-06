import { Navbar } from './components/Navbar'
import { LeftSidebar } from './components/LeftSidebar'
import { RightSidebar } from './components/RightSidebar'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className={` text-white `}>
      
        <LeftSidebar/>
        <Navbar/>
        <Hero/>
        <RightSidebar/>
    </div>
  );
}

export default App;
