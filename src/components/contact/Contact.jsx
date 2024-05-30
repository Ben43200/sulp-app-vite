import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Me Jean-François SULPICE</h2>
      <p>Adresse: 4 Place du Chapitre</p>
      <p>01400 Neuville-les-Dames</p>
      <p>
        Téléphone : <a href="tel:0474428795">04 74 42 87 95</a>
      </p>
      <p>
        Mail :{" "}
        <a href="mailto:jean-francois.sulpice@01106.notaires.fr">
          jean-francois.sulpice@01106.notaires.fr
        </a>
      </p>
    </div>
  );
}