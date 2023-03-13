import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './Pages/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
     <Announcement/>
    <Navbar/>
<Slider/>
<Product/>
<Footer/>


    </div>
  );
  
  }

export default App;