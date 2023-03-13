<<<<<<< HEAD
import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Product />
      <Footer />
    </div>
  );
};

export default Home
=======
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
>>>>>>> f478483fefd8ee14316fcc8075896de997c75f4f
