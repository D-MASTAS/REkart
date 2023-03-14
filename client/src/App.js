import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './Pages/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Feedback from './Pages/Feedback'
import Shop from './Pages/Shop'
import Recycle from './Pages/Recycle'
import Repurpose from './Pages/Repurpose'
import Reuse from './Pages/Reuse'
import Policy from './Pages/Policy'
import Upload from './Pages/Upload'
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
       <Announcement />
       <Navbar />
     
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/Policy" element={<Policy/>}/>
        <Route path="/Recycle" element={<Recycle/>}/>
        <Route path="/Reuse" element={<Reuse/>}/>
        <Route path="/Repurpose" element={<Repurpose/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  
  );
  
  }

export default App;