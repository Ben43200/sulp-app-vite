// import React from "react";
import "./tarifs.scss";
import  { Component } from "react";
import { pdf } from "../../utils/pdf.jsx";
// import Pdf1 from "url : /generalites_sur_le_tarif_des_notaires";
// import Pdf2 from "url: /Tarifs_affiches.pdf";
// import Pdf3 from "url: /Tableau.pdf";
import "./tarifs.scss";

export class Tarif extends Component {
  render() {
    return (
      <main>
        <h3>LE TARIF DES NOTAIRES</h3>
        <p>
          Il convient de distinguer les actes tarifés (ventes, donations,
          contrats de mariage, successions…) pour lesquels le notaire perçoit
          des émoluments (dont le tarif est fixé réglementairement par l’Etat),
          des actes non tarifés qui font l’objet d’honoraires libres.
        </p>
        <h4>Généralités sur le tarif des notaires</h4>

        <a className="pdf" href={pdf.Pdf1} target="_blank" rel="noopener noreferrer">
          <p>Téléchargez ici les Généralités sur le tarif des notaires</p>
        </a>

        <h4>Le tarif affiché dans la salle d’attente de l’Office</h4>
        <a className="pdf"  href={pdf.Pdf2} target="_blank" rel="noopener noreferrer" >
          <p>Téléchargez ici les tarifs affichés en salle d'attente</p>
        </a>

        <h3>LES HONORAIRES</h3>

        <p>
          Depuis le 1er mars 2016, les activités de négociation immobilière et
          de transaction donnent désormais lieu à des versements d’honoraires.
          Il en est de même pour les consultations des clients relatives à des
          prestations qui sont détachables de la préparation, de la rédaction ou
          de l’exécution de l’acte.
        </p>
        <p>
          Obligation : La fixation de ces honoraires donne lieu à une convention
          signée entre le notaire et son client.
        </p>

        <h4>Honoraires de l’Office</h4>

        <ul className="honoraires-list">
          <li>
            Tarifs d'honoraires de négociation 4.5 % TTC maximum du prix net
            vendeur Avec un minimum de 3600 € TTC.
          </li>
          <li>Tarifs d’expertise sur devis seulement.</li>
        </ul>
        <a className="pdf"  href={pdf.Pdf3} target="_blank" rel="noopener noreferrer">
          <p>Téléchargez ici le tableau des honoraires</p>
        </a>
      </main>
    );
  }
}

export default Tarif;