// import Card from "../../components/card/Card";
// import {Cloudinary} from "@cloudinary/url-gen";
import Carousel from "../../components/carousel/Carousel";
import { Link } from "react-router-dom";
import  Google from "../../utils/google-map.png"
import { Carte } from "../../utils/map2.js";
// import { stockData } from "../../utils/images";


import "./home.scss";
import Contact from "../../components/contact/Contact.jsx";

// import MyMapComponent from "../../components/mymap/MyMap.jsx";
function Home() {
  // const cld = new Cloudinary({cloud: {cloudName: 'dtvojwz5j'}});
  // const homeIntro =
  //   "Bienvenue sur le site Ekklêsia Web. Nous accompagnons les Eglises locales dans leur croissance en permettant une plus grande visibilité sur Internet. A l’écoute des besoins spécifiques de chaque paroisse, nous proposons des sites Web clés en main, à prix serrés. Nous concevons également des solutions sur mesure et professionnelles, sécurisées et évolutives.";
  return (
    <main className="home-container">
    
      {/* <MyMapComponent /> */}
      {/* <p className="intro">{homeIntro}</p> */}
      {/* <div className="google-map">
      <Link to="https://maps.app.goo.gl/UBfWP5JLSstGKZf29" target="_blank" rel="noreferrer">
        <img className="carte" src={Google} alt="carte" />
        </Link> */}
      {/* </div> */}
      {/* <Card /> */}
      <div className="map-container">
        <img className="carte" src={Carte.carte} alt="carte" />
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
      <Contact />
    </main>
  );
}

export default Home;