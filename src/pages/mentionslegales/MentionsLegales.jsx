import React from "react";
import { Link } from "react-router-dom";
import "./mentionslegales.scss";

export default function MentionsLegales() {
  window.scrollTo(0, 0);
  return (
    <main>
      <h2 className="mentions-title">Mentions Légales</h2>
      <h3 className="mentions-subtitle">1.Infos Editeur</h3>
      <p className="mentions-details">
        Éditeur : le Site est conçu par Benjamin Dollfus, micro-entrepreneur,
        Immatriculé sous le n° Siret 514 925 866 000 48 - Code APE 6201Z - 8B
        rue des Jardins 26400 Aouste-sur-sye. Tél. 06.98.55.70.26  <Link to="https://meteoben.com/" target="_blank"  rel="noreferrer">https://meteoben.com/</Link>
      </p>
      <h3 className="mentions-subtitle">2. Infos Hébergeur</h3>
      <p className="mentions-details">
        Le site de l'étude de Maître Jean-François SULPICE est hébergé par
        HOSTINGER, dont le siège social est situé HOSTINGER INTERNATIONAL LTD,
        61 Lordou Vironos Street, 6023 Larnaca, Chypre, joignable par le moyen
        suivant : https://www.hostinger.fr/contact.
      </p>
      <h3 className="mentions-subtitle">
        2. Conception et réalisation du site de Maître SULPICE
      </h3>
      <p className="mentions-details">
        Benjamin Dollfus est le concepteur exclusif du site avec les éléments
        fournis par Maître Jean-François SULPICE.
      </p>
      <p className="mentions-details">
        La reproduction sur support électronique La reproduction de tout ou
        partie de ce site sur un support électronique est autorisée sous réserve
        de l'ajout de façon claire et lisible de la source (URL exacte du site)
        et de la mention "Droits réservés". Les informations utilisées ne
        doivent l'être qu'à des fins personnelles, associatives ou
        professionnelles ; toute utilisation à des fins commerciales ou
        publicitaires est exclue. Toute reproduction, autrement que pour l'usage
        privé de l'utilisateur du site en vue notamment d'une diffusion publique
        par n'importe quel moyen est strictement interdite sans l'autorisation
        préalable et écrite de Benjamin Dollfus.
      </p>
      <p className="mentions-details">
        La création de liens hypertextes vers le site :
        https://adresse-sulpice.notaires.fr Le site autorise la mise en place
        d’un lien hypertexte pointant vers son contenu, sous réserve d’un accord
        préalable et exprès de Benjamin Dollfus de :
      </p>
      <ul className="liens-hyper">
        <li>
          ne pas utiliser la technique du lien profond ("deep linking"),
          c'est-à-dire que les pages du site https://adresse_sulpice.notaires.fr
          ne doivent pas être imbriquées à l'intérieur des pages d'un autre
          site, mais accessible par l’ouverture d’une fenêtre,
        </li>
        <li>
          mentionner la source qui pointera grâce à un lien hypertexte
          directement sur le contenu visé,
        </li>
        <li>
          les informations utilisées ne doivent l'être qu'à des fins
          personnelles, associatives ou professionnelles,
        </li>
        <li>
          toute utilisation à des fins commerciales ou publicitaires est exclue.
        </li>
      </ul>
      <p className="mentions-details">
        Attention ! Cette autorisation ne s’applique pas aux sites internet
        diffusant des informations à caractère polémique, pornographique,
        xénophobe ou pouvant, dans une plus large mesure porter atteinte à la
        sensibilité du plus grand nombre. L’Editeur décline toute responsabilité
        en ce qui concerne les pratiques et les politiques de protection de la
        confidentialité des données des sites auxquels nous pouvons être reliés
        par des liens hypertextes et nous vous engageons à en prendre
        connaissance.
      </p>
      <h3 className="mentions-subtitle">3. Contenus du site</h3>
      <p className="mentions-details">
        Les informations contenues sur le site engagent seule la responsabilité
        de leur auteur et ne sauraient engager la responsabilité de l’Editeur
        lorsque ce dernier n’est pas l’auteur de ces informations.{" "}
      </p>
      <p className="mentions-details">
        L’Editeur ne donne aucune garantie, explicite ou implicite, et n'assume
        aucune responsabilité relative à l'utilisation de la présente
        publication.
      </p>
      <p className="mentions-details">
        En aucun cas, l’Editeur ou un tiers impliqué dans la création de ce site
        ne sont responsables, ni ne peuvent être redevables à un utilisateur ou
        une autre partie, des dommages directs ou indirects, spéciaux,
        particuliers ou accessoires découlant de l'utilisation de ce site ou
        d'un autre site relié par un hyperlien, notamment des pertes de profit,
        de l'interruption des affaires, des pertes de programmes ou d'autres
        données du système de gestion de l'information de l'utilisateur ou
        autre, même si l’Editeur est expressément informé que des dommages sont
        possibles. Votre connexion à tout autre site extérieur est à vos risques
        exclusifs. La reproduction et la diffusion de l'image ou la vidéo d'une
        personne doivent respecter les principes issus du droit à l'image et du
        droit à la vie privée.
      </p>
      <p className="mentions-details">
        {" "}
        L’Editeur ne donne pas de garantie quant à la qualité, l'exactitude,
        l'actualité, l'ordre ou l'exhaustivité de l'information ou des documents
        dans ce site, et n'est tenu à aucune mise à jour de ces informations.
      </p>{" "}
      <p className="mentions-details">
        Les autres documents sont présentés à titre informatif et ne sauraient
        engager l’Editeur.
      </p>
      <h3 className="mentions-subtitle">4. Crédits photos</h3>
      <p className="mentions-details">
        Le concepteur du site s’engage à garantir que les photographies et/ou
        vidéos ajoutées sont libres de droit ou dans le cas contraire à
        mentionner le nom de l’auteur du document.
      </p>
      <ul className="copyright">
        <li>©Jean-François Sulpice</li>
        <li>©Benjamin Dollfus</li>
        <li>©Freepik</li>
      </ul>
      <h4 className="mentions-subtitle">6. Inquiétudes</h4>
      <p>
        Si vous pensez que l’Editeur n'a pas respecté les points qui précèdent,
        nous vous remercions de nous le faire savoir en adressant un courrier à
        l'adresse suivante : Benjamin Dollfus, 8B rue des jardins , 26400
        Aouste-sur-sye. Nous nous chargerons alors d'identifier et de corriger
        le problème.
      </p>
      <h4 className="mentions-subtitle">
        {" "}
        7. Modifications des termes et conditions
      </h4>
      L’Editeur peut à tout moment modifier les présentes en actualisant ce
      site. Ces modifications vous engagent et nous vous recommandons de
      consulter régulièrement ce site pour prendre connaissance des termes et
      conditions en vigueur.
      <h4 className="mentions-subtitle">
        10. Médiation de la consommation - Art L 616-1 et R 616-1 du code de la
        consommation
      </h4>
      <p>
        {" "}
        En cas de litige non résolu avec un notaire, vous avez la possibilité de
        saisir le Médiateur du notariat Médiateur-notariat.notaires.fr : E-mail
        : mediateurdunotariat@notaires.fr Adresse postale : 60 boulevard de la
        Tour-Maubourg, 75007 Paris, afin de tenter, avec son aide, de trouver
        une résolution amiable au conflit.
      </p>
      <h2 className="mentions-title">Données personnelles</h2>
      <h3 className="mentions-subtitle">
        Politique de protection des données personelles
      </h3>
      <p>
        Soucieuse du respect de votre vie privée, la protection des données
        personnelles est l’une de nos préoccupations majeures. Aussi la
        présentepolitique a pour objectif de vous fournir une information
        concise et pertinente concernant les traitements de données personnelles
        effectués pour la mise en œuvre du site internet.
      </p>
      <h4>Définitions</h4>
      <p>
        Données personnelles : toute information relative à une personne
        identifiée ou identifiable directement ou indirectement (ci-après, «
        données » ou « données personnelles »).
      </p>
      <p>
        Traitement de données personnelles : toute opération portant sur des
        données personnelles telles que la collecte, l’enregistrement,
        l’extraction, la modification, etc. (ci-après, « traitement » ou «
        traitement de données personnelles »
      </p>
      <p>
        Personnes concernées : toute personne physique dont les données
        personnelles font l’objet d’un traitement (ci-après, « vous », « vos »
        ou « personnes concernées »).
      </p>
      <p>
        Responsable de traitement : personne physique ou morale qui détermine la
        finalité et les moyens du traitement.
      </p>
      <p>
        Délégué à la protection des Données : personne désignée par le
        responsable de traitement pour notamment contrôler le respect de la
        réglementation, être le point de contact pour les questions relatives
        aux droits des personnes concernées et coopérer avec la Commission
        nationale de l'informatique et des libertés (CNIL).
      </p>
      <p>
        Cookies : fichierinformatique (traceur) déposé et lu notamment suite à
        la consultation d’un site internet, la lecture d’un courrier
        électronique, l’utilisation d’une application ou d’un logiciel, quel que
        soit le terminal utilisé.
      </p>
      <h4>Responsable de traitement</h4>
      <p>
        L’Office notarial, responsable du traitement de données personnelles
        relatif à la communication externe au sens du Règlement (UE) 2016/679 du
        27 avril 2016, s’engage à mettre en œuvre les mesures appropriées afin
        de protéger vos données personnelles.
      </p>
      <h4>Fondement et finalité des traitements de données personnelles</h4>
      Le traitement de données personnelles est fondé sur l’intérêt légitime du
      responsable de traitement visant à faciliter les échanges et assurer la
      communication auprès du grand public. Les données personnelles vous
      concernant sont traitées pour les finalités suivantes :
      <ul>
        <li>
          Assurer le bon fonctionnement et l’amélioration du site
          internet/portail/, des services et des fonctionnalités proposés;
        </li>
        <li>Garantir la sécurité du site internet ;</li>
        <li>Publier du contenu à l’attention du grand public.</li>
        <li>
          La fourniture du service en ligne relatif à la gestion de la prise de
          contact
        </li>
        <li>
          Des services et/ou des fonctionnalités complémentaires fondés sur
          l’exécution d’un contrat (ou de mesures précontractuelles prises à la
          demande de la personne concernée) sont proposés.
        </li>
        <li>
          Les traitements de données mis en œuvre à cette occasion ont pour
          finalité :
        </li>
        <li>
          La gestion du service permettant d’accéder au paiement en ligne
          lorsque cette possibilité existe
        </li>
      </ul>
      <h4>Collecte et durées de conservation des données personnelles</h4>
      <p>
        Conformément à la règlementation, seules les données nécessaires aux
        finalités précitées sont traitées.
      </p>
      <p>
        Les données collectées sont conservées pour une durée limitée et
        nécessaire à la réalisation des finalités mentionnées précédemment. Il
        s’agit, généralement, du temps nécessaire au traitement de votre
        demande.
      </p>
      <p>
        Les informations de connexion nécessaires notamment à l’amélioration du
        site internet et au maintien d’un niveau de sécurité approprié sont
        conservées jusqu’à 12 mois après la collecte.
      </p>
      <p>
        Les informations nécessaires à la gestion du service permettant
        d’accéder au paiement en ligne, lorsque cette fonctionnalité est
        disponible ne sont conservées que le temps de l’appel technique à ce
        service.
      </p>
      <h4> Destinataires des données personnelles</h4>
      <p>
        Pour la réalisation des finalités précitées, vos données sont
        susceptibles d’être communiquées intégralement ou en partie :
      </p>
      <ul>
        <li>
          aux tiers légalement habilités (ex : autorités de police dans le cadre
          des réquisitions judiciaires);
        </li>
        <li>
          Aux sous-traitants en charge des prestations de conception,
          administration de maintenance et d’hébergement
        </li>
      </ul>
      <h4>Transfert des données hors Union Européenne</h4>
      <p>
        Certains traitements sont susceptibles de faire l’objet d’un transfert
        de données personnelles dans les pays dont le niveau de protection n’est
        pas reconnu comme équivalent par la Commission européenne. En absence de
        décision d’adéquation, ce transfert est encadré par des garanties
        adaptées ou approuvées par la Commission européenne.
      </p>
      <h4>Sécurité des données personnelles</h4>
      <p>
        Le Responsable de traitement s’engage à garantir la confidentialité et
        la sécurité des données personnelles traitées. Il veille également à
        l’engagement des sous-traitants pour assurer la mise en œuvre de mesures
        techniques et organisationnelles afin de vous garantir un niveau de
        sécurité approprié.
      </p>
      <h4>Vos droits</h4>
      <p>
        Conformément à la réglementation, vous pouvez accéder aux données vous
        concernant. Le cas échéant, vous pouvez demander la rectification ou
        l’effacement de celles-ci, obtenir la limitation du traitement de ces
        données ou vous y opposer pour des raisons tenant à votre situation
        particulière. Vous pouvez également définir des directives relatives à
        la conservation, à l’effacement et à la communication de vos données
        personnelles après votre décès.
      </p>
      <p>
        Ces droits peuvent être exercés directement auprès du Responsable de
        traitement ou de son Délégué à la protection des données » à l’adresse
        suivante : cil@notaires.fr
      </p>
      <p>
        Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
        respectés, vous pouvez introduire une réclamation auprès d’une autorité
        de contrôle compétente, la CNIL pour la France.
      </p>
      <h4>Les cookies</h4>
      <p>Le site n'utilise que les cookies fonctionnels, et ne dépose pas d'autres cookies</p>
      {/* <p> */}
        {/* Les fonctionnalités des cookies utilisés sur le site internet Lors de la
        navigation sur le site internet, des outils de traçage peuvent générer
        et déposer un ou plusieurs cookie(s) sur votre terminal. Ils peuvent
        notamment faciliter votre navigation (ex : mémorisation de votre
        identifiant), établir des statistiques et des mesures d’audience afin
        d’améliorer le site internet, permettre la publicité ciblée.
      </p> */}
      <ul>
        <li>
          Les cookies fonctionnels sont strictement nécessaires à la fourniture
          du service expressément demandé par l’utilisateur et à la navigation
          (ex : adaptation de l’affichage à votre terminal, choix de langue,
          accès à un espace personnel, etc.). De fait, ils sont dispensés du
          recueil de consentement.
        </li>
        {/* <li>
          {" "}
          Les cookies analytiques permettent de générer des statistiques liées
          l’utilisation, la fréquentation générale et la performance du site
          internet en vue de l’améliorer.
        </li> */}
        {/* <li>
          ????Les cookies « tiers » de partage de contenu sur les réseaux
          sociaux facilitent le partage du contenu du site internet sur les
          différentes plateformes sociales. Ils sont déposés via des boutons
          réseaux sociaux. Pour de plus amples informations sur l’utilisation de
          vos données, nous vous invitons à consulter les politiques de
          protection des données des réseaux sociaux concernés.???{" "}
        </li> */}
        {/* <li>
          Les cookies « tiers » de ciblage (publicité) permettent de proposer
          des contenus publicitaires personnalisés en fonction de vos centres
          d’intérêts.
        </li> */}
      </ul>
      {/* <p>Liste des cookies utilisés et/ou déposés par notre site internet : </p> */}
      {/* <p>
        Dans le cadre de la mise en œuvre du traitement relatif à la
        communication externe, nous sommes amenés à utiliser différents cookies.
        La liste de ces derniers est accessible depuis une rubrique spécifique «
        Gestion des cookies » disponible au bas de chaque page du présent site.
        Pour plus d’information, nous vous invitons à consulter la politique de
        gestion des données mise en place par chaque éditeur d’outils de traçage
        (cookies).
      </p> */}
      {/* <p>
        {" "}
        Gérer les cookies Vous pouvez accepter, refuser ou exprimer vos
        préférences en matière de cookies directement via le bandeau
        d’information et de recueil du consentement au dépôt des cookies qui
        s’affiche lors de votre première visite sur le site. Ce dernier est
        également accessible depuis une rubrique spécifique « Gestion des
        cookies » disponible au bas de chaque page du présent site. Vous pourrez
        ainsi revenir, à tout moment, sur les choix effectués antérieurement. Le
        refus du dépôt de cookies sociaux empêchera toute interaction avec les
        réseaux sociaux. De même, le refus du dépôt de cookies de ciblage
        (publicitaire) ne permettra pas la visualisation de certains contenus
        multimédia. Vous pouvez également gérer les cookies (désactivation,
        blocage, suppression) depuis votre navigateur ou votre terminal dans le
        menu « Options » / « Préférences ». La procédure à suivre est
        généralement décrite dans la rubrique « Aide » de votre navigateur.
      </p> */}
      <h4> La mise à jour de la politique</h4>
      <p>
        La présente Politique de protection des données à caractère personnel
        peut être actualisée, à tout moment, en fonction des évolutions du
        traitement ou si la Loi l’exige.
      </p>
    </main>
  );
}