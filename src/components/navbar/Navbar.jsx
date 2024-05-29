import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../../utils/logo.js";
import "./navbar.scss"


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();
    // console.log(logo.logo2);
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
    const title = "Maître Jean-François SULPICE, Notaire à Neuville-les-Dames";
  
    return (
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="logo-container">
            <img src={logo.logo1} className="logo-1" alt="logo" />
            <img src={logo.logo2} className="logo-2" alt="logo" />
            </div>
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
                      <NavLink to={`/${menu.url}`} onClick={closeAndTop} className={location.pathname === `/${menu.url}` ? 'active' : ''}>
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
          <h1 className="title">{title}</h1>
        </div>
      </header>
    );
  };
  
  export default Navbar;