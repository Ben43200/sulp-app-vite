import React from "react";
import MenuCompetences from "../../components/menuCompetences/MenuCompetences.jsx";
// import Business from "../../../Utils/group-people-working-out-business-plan-office.jpg"


export default function Entreprise(){
    return(
        <main>
            <MenuCompetences />
            <h1>Le droit de l'entreprise</h1>
            <p>Les notaires offrent des prestations de conseils aux chefs d'entreprise.</p>
<p>Ils abordent le droit de l'entreprise dans tous ses aspects : choix de la forme la mieux adaptée au
projet, rédaction des statuts, mais aussi rédaction des baux commerciaux, mise en place de location-
gérance ou encore vente de fonds de commerce.</p>
<div className="img-container">
{/* <img className="img-comp" src={Business} alt="cute-familly"/> */}
</div>
        </main>
    )
}