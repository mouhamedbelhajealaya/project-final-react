import React from "react";
import "./Hero.css";
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from "react-countup";
const Hero = () => {
  return (
  <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

      {/* left side The first black senator */}
      <div className="flexColStart hero-left">
        <div className="hero-title">
          <div className="orange-cicle"/>
        <h1>
            XPERT-STORE <br />
            Fabricant profileur 
            </h1>
        </div>
            
      <div className="flexColStart hero-des">
      <span className="secondaryText">Nous sommes l’un .</span><br/>
      <span className="secondaryText">Cette expertise </span>
      {/* des rares fabricants de rideaux métalliques à réaliser notre profilage en interne */}
      {/* dans le profilage à froid, nous permet de nous différencier par la réactivité et la qualité de nos profils. */}
      </div>

      <div className="flexCenter search-bar">
        <HiLocationMarker color="var(--blue)"size={25}/>
        <input type="text"/>
        <button className="button">search</button>
      </div>



          <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>

              <CountUp start={8800} end={9000} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText" >
              premium products
            </span>
          </div>

          <div className="flexColCenter stat">
            <span>
              
              <CountUp start={1950} end={2000} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">
            Happy Customers
            </span>
          </div>

          <div className="flexColCenter stat">
            <span>
              
              <CountUp end={28} />
              <span>+</span>
            </span>
            <span className="secondaryText">
          Award Winning
            </span>
          </div>



        </div>
      </div>
      {/* right side The first black senator */}
      <div className=" flexCenter hero-right">
          <div className="image-container">
              <img src="./hero-image.png" alt=""/>
          </div>
        </div>  


      </div>
  </section>
  )
}

export default Hero;
