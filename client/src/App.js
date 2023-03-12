import { BrowserRouter, Routes, Router } from 'react-router-dom'
import Announcement from "./components/Announcement"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
     <Announcement/>
    <Navbar/>
<Slider/>
<Footer/>


    </div>
  );
}

export default App;
