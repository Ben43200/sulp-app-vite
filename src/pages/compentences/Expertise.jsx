import React from "react";
import MenuCompetences from "../../components/menuCompetences/MenuCompetences.jsx";
// import Expert from "../../../Utils/business-people-signing-contract.jpg"


export default function Expertise(){
 const Expert = [
     "business-people-signing-contract.webp"]
    return(
        <main>
            <MenuCompetences />
            <h1>L'expertise</h1>
            <p>L'expertise immobilière réalisée par votre notaire permet de connaître la valeur vénale d'un bien
immobilier grâce notamment à l’accès à la Base d’informations économiques notariales.</p>
<p> Cette base
recense l’ensemble des transactions, ce qui permet de mettre à votre portée une connaissance fine
de l’état du marché à l’instant T.</p>
<p>Cela sera d'une grande utilité bien entendu lors d’un investissement ou pour vous prémunir
contre une contestation des services fiscaux, pour votre déclaration d’IFI ou le calcul de droits
de donation ou de succession.</p>
<p>Votre notaire apporte un cadre sécurisant aux expertises immobilières que vous pouvez être
conduits à présenter au tribunal, dans le cadre de la vente d’un bien d’une personne sous tutelle, par
exemple.</p>
<div className="img-container">
<img className="img-comp" src={Expert} alt="Expertise"/>
</div>
        </main>
    )
}