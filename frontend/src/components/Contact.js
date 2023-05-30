import React, { useState } from 'react'
import './Contact.css'

function Contact(){
  const [showText1, setShowText1] = useState(false)
  const [showText2, setShowText2] = useState(false)
  const [showText3, setShowText3] = useState(false)
  const [showText4, setShowText4] = useState(false)
  let timeoutId

  function handleMouseEnter1() {
    setShowText1(true)
    setShowText2(false)
    setShowText3(false)
    setShowText4(false)
    clearTimeout(timeoutId)
  }

  function handleMouseEnter2() {
    setShowText2(true)
    setShowText1(false)
    setShowText3(false)
    setShowText4(false)
    clearTimeout(timeoutId)
  }

  function handleMouseEnter3() {
    setShowText3(true)
    setShowText1(false)
    setShowText2(false)
    setShowText4(false)
    clearTimeout(timeoutId)
  }

  function handleMouseEnter4() {
    setShowText4(true)
    setShowText1(false)
    setShowText2(false)
    setShowText3(false)
    clearTimeout(timeoutId)
  }

  function handleMouseLeave() {
    timeoutId = setTimeout(() => {
      setShowText1(false)
      setShowText2(false)
      setShowText3(false)
      setShowText4(false)
    }, 4000)
  }
  return(
    <div className="Show">

      <img src={require('./images/LinkedIn.png')} id="i_Contact" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave} alt="Imagen"></img>
      {showText1 && <a href="https://www.linkedin.com/in/omar-oporto-bernal-a1b000269/" className="Linkedin" target="_blank" rel="noreferrer">
                &#160; Link to Page &#160;
      </a>
      }
      <img src={require('./images/Whatsapp.png')} id="i_Whatsapp" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave} alt="Imagen"></img>
      {showText2 && <p className="Whats">&#160;&#160;&#160; 63968723 &#160;</p>}
      <img src={require('./images/Github.png')} id="i_Github" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave} alt="Imagen"></img>
      {showText4 && <a href="https://github.com/OmarOporto" className="Git" target="_blank" rel="noreferrer">&#160; Github repository</a>}
      <img src={require('./images/Email.png')} id="i_Mail" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave} alt="Imagen"></img>
      {showText3 && <a href="mailto:omar.oportober@gmail.com" className="Correo">
                &#160; omar.oportober@gmail.com
      </a>
      }
    </div>
  )
}

export default Contact