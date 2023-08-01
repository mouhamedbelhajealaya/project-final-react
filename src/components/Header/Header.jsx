import React from "react";
import './Header.css'
const Header = () => {
  return (
  <section className="h-wrapper">
    <div className="flexCenter paddings innerWidth h-container">
               {/* logo */}
      <img src="./logo.png" alt="logo" width={100}  />
              {/* lyana navbar */}
      <div className="flexCenter h-menu">
        <a href="">PORTAILS</a>
        <a href="">PORTES DE GARAGE</a>
        <a href="">RIDEAUX MÉTALLIQUES</a>
        <a href="">PIÈCES DÉTACHÉES</a>
        <button className="button">
        <a href="">CONTACT</a>
        </button>
      </div>
    </div>
  </section>
  )
}

export default Header;
