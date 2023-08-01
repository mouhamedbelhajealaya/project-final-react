import React from "react";
import "./Companies.css";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="r-head flexColStart">
        <span className="orangeText">Que recherchez-vous ?</span>
        <span className="primaryText">La qualité et l'expertise à la française</span>
      </div>

      <div className="paddings innerWidth flexCenter c-container">
        <Col className="Icons" xs={3} md={4}>
          <button><Image src="./prologis.png" alt="" /></button>
        </Col>
        <Col className="Icons"  xs={3} md={4}>
          <Image src="./tower.png"  alt="" />
        </Col>
        <Col className="Icons"  xs={3} md={4}>
          <Image src="./realty.png"  alt="" />
        </Col>
        <Col className="Icons"  xs={3} md={4}>
          <Image src="./equinix.png"  alt="" />
        </Col>
        <Col className="Icons"  xs={3} md={4}>
          <Image src="./thumb.png"  alt=""  />
        </Col>
        <Col className="Icons"  xs={3} md={4}>
          <Image src="./pieces.png"  alt="" />
        </Col>
      </div>
    </section>
  )
}

export default Companies;

