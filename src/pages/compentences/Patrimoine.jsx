import React from "react";
import MenuCompetences from "../../components/menuCompetences/MenuCompetences";
// import Money from "../../../Utils/gold-coin-hourglass-time-is-money-concept.jpg";
// import Paragraph from "../../../components/Paragraph.jsx";
export default function Patrimoine() {
  return (
    <main>
      <MenuCompetences />
      <h1>Le patrimoine</h1>
    <p>
        Placement immobilier, épargne-retraite, stratégie de transmission,
        optimisation fiscale, testament, donation, protection du conjoint,
        partage de la succession, relations entre les héritiers... Pas toujours
        facile de s'y retrouver et de ne pas faire d'erreur.
      </p>
      <p>
        Votre notaire saura vous guider pour réussir au mieux la transmission de
        votre patrimoine et éviter les conflits familiaux.
      </p>
      <p>
        Quel que soit votre objectif, votre notaire saura donner vie à vos
        projets.
      </p>
      <div className="img-container">
        {/* <img className="img-comp" src={Money} alt="Patrimoine" /> */}
      </div>
    </main>
  );
}
