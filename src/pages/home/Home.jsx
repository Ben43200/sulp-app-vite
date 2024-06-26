import Carousel from "../../components/carousel/Carousel";
import { Link } from "react-router-dom";
import { Carte } from "../../utils/map2.js";
import { logo } from "../../utils/logo.js";
// const Carousel = lazy(() => import('../../components/carousel/Carousel')); 

import "./home.scss";
import Contact from "../../components/contact/Contact.jsx";

// import MyMapComponent from "../../components/mymap/MyMap.jsx";
function Home() {
  // console.log(logo.logo1);
  
//   useEffect(() => {
//     const img = new Image();
//     img.src = Carte.carte;
// }, []);
// console.log(Carte.carte)
 
  return (
    <main className="home-container">
      <Link to="https://maps.app.goo.gl/UBfWP5JLSstGKZf29" target="_blank" rel="noopener noreferrer">
      <div className="map-container">
        <img className="carte" src={Carte.carte} alt="carte" />
        <img src={logo.logo1} className="logo-mini" alt="logo" />
      </div>
      </Link>
      
      <div className="carousel-container">
        <Carousel />
      </div>
      <Contact />
    </main>
  );
}

export default Home;