import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
  <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container">
            {/* left side imag contact */}

      <div className="flexColStart c-left">
        <span className="orangeText">QUESTIONS FRÉQUENTES</span>
        <span className="primaryText">Trouvez toutes les réponses à vos questions les plus courantes !</span>
        <span className="secondaryText">Quelle est la meilleure porte de garage DVSDVK?SMV?</span>
          
          <div className="flexColStart contactModes">
            {/* first row  */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexstart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>
                  </div>
                  <span>Call</span>
                  <span>023 383 383 92</span>
                </div>
              </div>
              <div className="flexCenter button">Call Now</div>

            </div>
          </div>
      </div>

      {/* right side  */}

      <div className="c-right">
        <div className="image-container">
          <img src="./contact.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
