import { BrowserRouter,  Routes, Route,  } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer/Footer";
// import Tarifs from "./pages/Tarifs/Tarifs";
// import Error from "./pages/Error/Error";
import Famille from "./pages/compentences/Famille";
import Patrimoine from "./pages/compentences/Patrimoine";
import Immobilier from "./pages/compentences/Immobilier.jsx";
import Entreprise from "./pages/compentences/Entreprise.jsx";
import Expertise from "./pages/compentences/Expertise.jsx";
// import MentionsLegales from "./pages/MentionsLegales/MentionsLegales"
// import ContactPage from "./pages/Contact/ContactPage";
// import Etude from "./pages/Etude/Etude";


import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Competences from "./pages/compentences/Competences.jsx";
// import MenuCompetences from "./components/menuCompetences/MenuCompetences.jsx";





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>
      {/* <ScrollToTop /> */}

    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
<Route path="/competences" element={<Competences />} />
{/* <Route path="/comepetences/menucompetences/:id" element={<MenuCompetences />} /> */}
{/* <Route path="/tarifs" element={<Tarifs />} />
<Route path="/etude" element={<Etude />} />*/}

<Route path="/famille" element={<Famille />} />
<Route path="/patrimoine" element={<Patrimoine />} />
<Route path="/expertise" element={<Expertise />} />
 <Route path="/immobilier" element={<Immobilier />} />
 <Route path="/entreprise" element={<Entreprise />} />
<Route path="/expertise" element={<Expertise />} />
{/* <Route path="/mentionslegales" element={<MentionsLegales />} />
<Route path="/contactpage" element={<ContactPage />} />
<Route path="*" element={<Error />} /> */}  
</Routes>
    <Footer />
  </BrowserRouter>

  // </React.StrictMode>
);