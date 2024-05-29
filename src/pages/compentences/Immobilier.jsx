import React from "react";
import MenuCompetences from "../../components/menuCompetences/MenuCompetences.jsx";
// import House from "../../../Utils/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg";
export default function Immobilier() {
  return (
    <main>
      <MenuCompetences />
      <h1>Le droit immobilier</h1>
      <p>
        Que ce soit pour y vivre ou investir, l'immobilier est le placement
        favori des Français.
      </p>
      <p>
        Votre notaire est la personne appropriée pour vous aider à réussir votre
        projet d’achat, de vente, de location, d’investissement ou encore de
        gestion locative, que vous soyez un particulier ou un professionnel,
        public ou privé.
      </p>
      <div className="img-container">
        {/* <img className="img-comp" src={House} alt="House" /> */}
      </div>
    </main>
  );
}