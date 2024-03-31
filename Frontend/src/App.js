import { Home } from "./pages/public/Home";
import { Following } from "./pages/public/Following";
import { Spaces } from "./pages/public/Spaces";
import { Jobs } from "./pages/public/Jobs";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Public } from "./pages/public/Public";
import { Competitions } from "./pages/public/Competitions";
import { Mentorships } from "./pages/public/Mentorships";
import { Reset } from "./pages/auth/Reset";
import { Allset } from "./pages/auth/Allset";
import { Verify } from "./pages/auth/Verify";
import { Forgot } from "./pages/auth/Forgot";
import { Profile } from "./pages/single/Profile";
import { Messages } from "./pages/single/Messages";
import { Error } from "./pages/single/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Single from "./layouts/Single";
import Main from "./layouts/Main";
import { Auth } from "./layouts/Auth";

function App () {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Auth />}>
                <Route index element={<Login/>}/>
                {/* <Route path="/auth/login" element={<Login/>}/> */}
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<Reset />} />
                <Route path="/allset" element={<Allset />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/*" element={<Error/>} />
            </Route>

            <Route path="/main" element={<Main />}>
              <Route index element={<Home/>}/>
              <Route path="/main/following" element={<Following />} />
              <Route path="/main/spaces" element={<Spaces />} />
              <Route path="/main/jobs" element={<Jobs />} />
              <Route path="/main/public" element={<Public />} />
              <Route path="/main/comp" element={<Competitions />} />
              <Route path="/main/mentorships" element={<Mentorships />} />
              <Route path="/main/*" element={<Error />} />
            </Route>

          <Route path="/single" element={<Single/>}>
            <Route path="/single/profile" element={<Profile />} />
            <Route path="/single/messages" element={<Messages />} />
            <Route path="/single/*" element={<Error/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
