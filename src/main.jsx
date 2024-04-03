// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )






// import React from "react";
import { BrowserRouter,  Routes, Route,  } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import Navbar from "./components/Navbar/Navbar";
// import Methodologie from "./pages/Methodologie/Methodologie";
// import Mission from "./pages/Mission/Mission";

import Footer from "./components/footer/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import Service from "./pages/Services/Services";
// import Realisations from "./pages/Realisations";
// import ContactPage from "./pages/ContactPage/ContactPage";

// import Error from "./pages/error/Error";


import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
// import Contact from "./pages/contact/Contact";

// import Footer from "./components/footer/Footer";
// import Mission  from "./pages/mission/Mission";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>
      {/* <ScrollToTop /> */}

    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/mission" element={<Mission />} /> */}
      {/* <Route path="/methodologie" element={<Methodologie />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/services" element={<Service />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<Error />} /> */}

{/* <Route path="/contact" element={<Contact />} /> */}


</Routes>
    <Footer />

  {/* </Router> */}
  </BrowserRouter>

  // </React.StrictMode>
);