import { Navbar } from './components/Navbar'
import { LeftSidebar } from './components/LeftSidebar'
import { RightSidebar } from './components/RightSidebar'
import { Home } from './pages/Home'
import { Following } from './pages/Following'
import { Spaces } from './pages/Spaces'
import { Jobs } from './pages/Jobs'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Public } from './pages/Public'
import { Competitions } from './pages/Competitions'
import { Mentorships } from './pages/Mentorships'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Reset } from './pages/auth/Reset'
import { Allset } from './pages/auth/Allset'
import { Verify } from './pages/auth/Verify'
import { Forgot } from './pages/auth/Forgot'
import { MobileNav } from './components/MobileNav'
import { Profile } from './pages/Profile'
import { Messages } from './pages/Messages'


function App() {

  return (
    <div className="text-white ">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/reset" element={<Reset/>} />
          <Route exact path="/allset" element={<Allset/>} />
          <Route exact path="/verify" element={<Verify/>} />
          <Route exact path="/forgot" element={<Forgot/>} />
        </Routes>
        <Navbar/>
        <LeftSidebar/> 
        <Routes>  
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/following" element={<Following/>} />
          <Route exact path="/spaces" element={<Spaces/>} />
          <Route exact path="/jobs" element={<Jobs/>} />
          <Route exact path="/public" element={<Public/>}/>
          <Route exact path="/comp" element={<Competitions/>} />
          <Route exact path="/mentorships" element={<Mentorships/>}/>
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/messages" element={<Messages/>} />
        </Routes>
        <RightSidebar/>
        <MobileNav/>
      </Router>

    </div>
  );
}

export default App;
