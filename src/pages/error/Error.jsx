import { Link } from "react-router-dom";
import React from "react";
import "./error.scss";


export default function Error() {
    return (

        <main className="error">
            <div className="errorContainer">
                <p className="errorTitle">404</p>
                <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="errorLinkHome">
                    Retourner sur la page d’accueil
                </Link>
            </div>
        </main>

    );
}