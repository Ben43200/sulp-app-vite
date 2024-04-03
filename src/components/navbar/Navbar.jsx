import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { IMAGES } from "../../utils/IMAGES";
import logo from "../../utils/logo-jeff.png"
import { useEffect, useRef } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  let menuRef = useRef();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeAndTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowNavbar(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const menuItemsData = [
    { title: "Accueil", url: "" },
    { title: "Etude", url: "etude" },
    { title: "Compétences", url: "competences" },
    { title: "Tarifs", url: "tarifs" },
    { title: "Contact", url: "contact" },
  ];
  const title = "Avec Ekklêsia Web, dynamisez votre vie d'église avec le Net !";

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <img src={logo} className="logo-1" alt="logo" />
          <div className="menu-icon" onClick={handleShowNavbar}>
            <span className="burger-icon" ref={menuRef}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul className="menus">
              {menuItemsData.map((menu, index) => {
                return (
                  <li className="menu-items" key={index}>
                    <NavLink to={`/${menu.url}`} onClick={closeAndTop}>
                      {menu.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="title-container">
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default Navbar;