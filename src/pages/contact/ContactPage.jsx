import React from "react";
import Contact from "../../components/contact/Contact.jsx";
import "./contactpage.scss"
import { Link } from "react-router-dom";
import { logo } from "../../utils/logo.js";
import { Carte } from "../../utils/map2.js";

export default function ContactPage(){
    return(
        <main className="contact-page-container">
               <Link className="card-link" to="https://maps.app.goo.gl/UBfWP5JLSstGKZf29" target="_blank" rel="noopener noreferrer">
      <div className="map-container">
        <img className="carte" src={Carte.carte} alt="carte" />
        <img src={logo.logo1} className="logo-mini" alt="logo" />
      </div>
      </Link>
   <Contact />
    <div className="contact-title">
  <h1>N'hésitez pas à contacter votre notaire</h1>
  </div>
  <div className="horaires-container">
    <h2>Horaires</h2>
    <p>Lundi 9h-12h / 14h-18h</p>
    <p>Mardi 9h-12h / 14h-18h</p>
    <p>Mercredi 9h-12h / 14h-18h</p>
    <p>Jeudi 9h-12h / 14h-18h</p>
    <p>Vendredi 9h-12h / 14h-18h</p>
    <p>Samedi sur rendez-vous</p>
  </div>
        </main>
    )
    }