import Announcement from "./components/Announcement"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Slider from "./components/Slider";
function App(){
  return (
    <div className="App">
     <Announcement/>
    <Navbar/>
<Slider/>
<Product/>
<Newsletter/>
<Footer/>


    </div>
  );

  }
export default App;
