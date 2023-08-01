import React from 'react'
import {connect} from 'react-redux'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { sliderSsttings } from '../../utils/common';
import "swiper/css";

import "./Residmetal.css"
const Residmetal = (props) => {
  return (
  <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
      <div className="r-head flexColStart">
      <span className='orangeText'>DÉCOUVREZ NOS AUTRES CATÉGORIES</span>
      <span className='primaryText'>Nos solutions sur mesure</span>
      </div>
        <Swiper {...sliderSsttings}> 
            <SliderButtons/>
        
      {props.metal.list.map(el=>( 
            <SwiperSlide key={el}>
              <div className="flexColStart r-card">
                <img src={el.image} alt="home"/>
                <span className="secondaryText r-price">
                  <span style={{ color: "orange"}}>€</span>
                  <span>{el.price}</span>
                </span>
                <span className="primaryText">{el.name}</span>
                <span className="secondaryText">{el.detail}</span>
              </div>
              </SwiperSlide> 
    ))}
          </Swiper>
    </div>  
    </section>

  )
}














//     <div>
      
//         {props.metal.list.map(el=>
        
//         <div className="flexColStart r-card">
//         <img src={el.image} alt="home"/>
//         <span className="secondaryText r-price">
//           <span style={{ color: "orange"}}>€</span>
//           <span>{el.price}</span>
//         </span>
//         <span className="primaryText">{el.name}</span>
//         <span className="secondaryText">{el.detail}</span>
//       </div>  
// )}
//     </div>

const mapStateToProps = state =>{
  return{
    metal :state.metalReducer,
  }
}
export default connect(mapStateToProps,null) (Residmetal);
const SliderButtons = ()=> {
const swiper = useSwiper();
  return(
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>


  )}