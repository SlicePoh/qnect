import { Navbar } from './components/Navbar'
import { LeftSidebar } from './components/LeftSidebar'
import { RightSidebar } from './components/RightSidebar'
import { Home } from './pages/Home'
import { Following } from './pages/Following'
import { Spaces } from './pages/Spaces'
import { Jobs } from './pages/Jobs'
import { Public } from './pages/Public'
import { Competitions } from './pages/Competitions'
import { Mentorships } from './pages/Mentorships'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="text-white">
      <Router>
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
        </Routes>
        <RightSidebar/>
      </Router>

    </div>
  );
}

export default App;
