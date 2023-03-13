import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './Pages/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  );
  
  }

export default App;
